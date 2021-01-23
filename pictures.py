import sqlite3
import wget
import os

con = sqlite3.connect("PokemonDatabase.db")
cur = con.cursor()

cur.execute('SELECT * FROM Pokemon WHERE Alternate is NULL')
dbpokemon = cur.fetchall()
pokemon = []
for i in range(len(dbpokemon)):
    pokemon.append(dbpokemon[i][2].lower().replace('\'', '').replace(' (male)', '-m').replace(' (female)', '-f').replace(' ', '-').replace('.', '').replace(':', '')
        .replace('urshifu', 'urshifu-single-strike').replace('oricorio', 'oricorio-baile').replace('wishiwashi', 'wishiwashi-solo').replace('shaymin', 'shaymin-land')
        .replace('giratina', 'giratina-altered').replace('lycanroc', 'lycanroc-midday').replace('morpeko', 'morpeko-full-belly'))
try:
    cur.execute('ALTER TABLE Pokemon ADD COLUMN Image varchar(32)')
except:
    print("column exists")
for i in range(len(pokemon)):
    cur.execute('UPDATE Pokemon SET Image = ? WHERE ID = ?', (pokemon[i], dbpokemon[i][0]))    
con.commit()
con.close()

image_url = "https://img.pokemondb.net/artwork/large/"
for i in pokemon:
    os.system("wget -N -q -O {0} {1}".format("web/public/pictures/" + i + ".jpg", image_url + i + ".jpg"))


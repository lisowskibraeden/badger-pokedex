package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"strconv"

	"github.com/jmoiron/sqlx"
	"github.com/lisowskibraeden/gqlgen-todos/graph/generated"
	"github.com/lisowskibraeden/gqlgen-todos/graph/model"
	_ "github.com/mattn/go-sqlite3"
)

func (r *queryResolver) Pokemons(ctx context.Context) ([]*model.Pokemon, error) {
	if db == nil {
		var err error
		db, err = sqlx.Open("sqlite3", "./PokemonDatabase.db")
		if err != nil {
			return nil, err
		}
	}
	db.MapperFunc(func(s string) string { return s })
	rows, err := db.Queryx("SELECT * FROM Pokemon")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var pokemen []*model.Pokemon
	for rows.Next() {
		i := model.Pokemon{}
		err := rows.StructScan(&i)
		if err != nil {
			return nil, err
		}
		pokemen = append(pokemen, &i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return pokemen, nil
}

func (r *queryResolver) Pokemon(ctx context.Context, id int) (*model.Pokemon, error) {
	if db == nil {
		var err error
		db, err = sqlx.Open("sqlite3", "./PokemonDatabase.db")
		if err != nil {
			return nil, err
		}
	}
	db.MapperFunc(func(s string) string { return s })
	statement, err := db.Preparex("SELECT * FROM Pokemon WHERE ID=?")
	if err != nil {
		return nil, err
	}
	defer statement.Close()
	i := model.Pokemon{}
	err = statement.Get(&i, id)
	if err != nil {
		return nil, err
	}

	return &i, nil
}

func (r *queryResolver) Evolutions(ctx context.Context, id int) ([]*model.Pokemon, error) {
	if db == nil {
		var err error
		db, err = sqlx.Open("sqlite3", "./PokemonDatabase.db")
		if err != nil {
			return nil, err
		}
	}
	db.MapperFunc(func(s string) string { return s })
	statement, err := db.Preparex("SELECT * FROM Pokemon WHERE PreEvolutionID=?")
	if err != nil {
		return nil, err
	}
	defer statement.Close()
	rows, err := statement.Queryx(id)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var pokemen []*model.Pokemon
	for rows.Next() {
		i := model.Pokemon{}
		err := rows.StructScan(&i)
		if err != nil {
			return nil, err
		}
		pokemen = append(pokemen, &i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return pokemen, nil
}

func (r *queryResolver) Pokenum(ctx context.Context, num int) ([]*model.Pokemon, error) {
	if db == nil {
		var err error
		db, err = sqlx.Open("sqlite3", "./PokemonDatabase.db")
		if err != nil {
			return nil, err
		}
	}
	db.MapperFunc(func(s string) string { return s })
	statement, err := db.Preparex("SELECT * FROM Pokemon WHERE Num=?")
	if err != nil {
		return nil, err
	}
	defer statement.Close()
	rows, err := statement.Queryx(num)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var pokemen []*model.Pokemon
	for rows.Next() {
		i := model.Pokemon{}
		err := rows.StructScan(&i)
		if err != nil {
			return nil, err
		}
		pokemen = append(pokemen, &i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return pokemen, nil
}

func (r *queryResolver) Pokenumrange(ctx context.Context, start int, end int) ([]*model.Pokemon, error) {
	if db == nil {
		var err error
		db, err = sqlx.Open("sqlite3", "./PokemonDatabase.db")
		if err != nil {
			return nil, err
		}
	}
	db.MapperFunc(func(s string) string { return s })
	statement, err := db.Preparex("SELECT * FROM Pokemon WHERE Num BETWEEN ? AND ?")
	if err != nil {
		return nil, err
	}
	defer statement.Close()
	rows, err := statement.Queryx(end, start)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var pokemen []*model.Pokemon
	for rows.Next() {
		i := model.Pokemon{}
		err := rows.StructScan(&i)
		if err != nil {
			return nil, err
		}
		pokemen = append(pokemen, &i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return pokemen, nil
}

func (r *queryResolver) Allpokenoalt(ctx context.Context) ([]*model.Pokemon, error) {
	if db == nil {
		var err error
		db, err = sqlx.Open("sqlite3", "./PokemonDatabase.db")
		if err != nil {
			return nil, err
		}
	}
	db.MapperFunc(func(s string) string { return s })
	statement, err := db.Preparex("SELECT * FROM Pokemon WHERE Alternate is NULL ORDER BY Num ASC")
	if err != nil {
		return nil, err
	}
	defer statement.Close()
	rows, err := statement.Queryx()
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var pokemen []*model.Pokemon
	for rows.Next() {
		i := model.Pokemon{}
		err := rows.StructScan(&i)
		if err != nil {
			return nil, err
		}
		pokemen = append(pokemen, &i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return pokemen, nil
}

func (r *queryResolver) Search(ctx context.Context, query string) ([]*model.Pokemon, error) {
	if db == nil {
		var err error
		db, err = sqlx.Open("sqlite3", "./PokemonDatabase.db")
		if err != nil {
			return nil, err
		}
	}
	db.MapperFunc(func(s string) string { return s })
	if number, err := strconv.Atoi(query); err == nil {
		if err != nil {
			return nil, err
		}
		statement, err := db.Preparex("SELECT * FROM Pokemon WHERE Num = ?")
		if err != nil {
			return nil, err
		}
		defer statement.Close()
		rows, err := statement.Queryx(number)
		_ = rows
		if err != nil {
			return nil, err
		}
		defer rows.Close()
		var pokemen []*model.Pokemon
		for rows.Next() {
			i := model.Pokemon{}
			err := rows.StructScan(&i)
			if err != nil {
				return nil, err
			}
			pokemen = append(pokemen, &i)
		}
		if err := rows.Err(); err != nil {
			return nil, err
		}
		return pokemen, nil

	} else {
		statement, err := db.Preparex("SELECT * FROM Pokemon WHERE Name LIKE ?")
		if err != nil {
			return nil, err
		}
		defer statement.Close()
		rows, err := statement.Queryx(query + "%")
		_ = rows
		if err != nil {
			return nil, err
		}
		defer rows.Close()
		var pokemen []*model.Pokemon
		for rows.Next() {
			i := model.Pokemon{}
			err := rows.StructScan(&i)
			if err != nil {
				return nil, err
			}
			pokemen = append(pokemen, &i)
		}
		if err := rows.Err(); err != nil {
			return nil, err
		}
		return pokemen, nil
	}
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
var db *sqlx.DB

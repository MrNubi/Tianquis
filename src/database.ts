// src/database.ts
import SQLite from 'react-native-sqlite-storage'
const db = SQLite.openDatabase(
  {
    name: 'FoodDatabase',
    location: 'default',
  },
  () => {
    console.log('Database connected');
  },
  (err:any) => {
    console.log('Database connection error:', err);
  }
);

export const createTable = () => {
  db.transaction((tx: any) => {
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS food_nutrition (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          food_group TEXT,
          food_name TEXT,
          energy INTEGER,
          water_content REAL,
          protein REAL,
          fat REAL,
          ash REAL,
          carbohydrate REAL,
          sugars REAL,
          total_dietary_fiber REAL,
          calcium INTEGER,
          iron REAL,
          magnesium INTEGER,
          phosphorus INTEGER,
          potassium INTEGER,
          sodium INTEGER,
          zinc REAL,
          copper REAL,
          manganese REAL,
          selenium REAL,
          molybdenum REAL,
          iodine REAL,
          vitamin_a REAL,
          thiamin REAL,
          riboflavin REAL,
          niacin REAL,
          pantothenic_acid REAL,
          vitamin_b6 REAL,
          biotin REAL,
          folate REAL,
          vitamin_b12 REAL,
          vitamin_c REAL,
          vitamin_d REAL,
          vitamin_e REAL,
          vitamin_k REAL,
          total_amino_acids TEXT,
          essential_amino_acids TEXT,
          cholesterol REAL,
          total_fatty_acids REAL,
          saturated_fatty_acids REAL,
          unsaturated_fatty_acids REAL,
          omega_3_fatty_acids REAL,
          omega_6_fatty_acids REAL,
          total_trans_fatty_acids REAL
        );`,
        [],
      () => {
        console.log('Table created');
      },
      (err:any) => {
        console.log('Table creation error:', err);
      }
    );
  });
};

export const getDB = () => db;

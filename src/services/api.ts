// src/services/api.ts
import { getDB } from '../database'; // SQLite 데이터베이스 연결 함수 가져오기

// 데이터를 API에서 가져와서 SQLite DB에 저장하는 함수
export const fetchDataAndSaveToDB = async () => {
  const db = getDB(); // DB 인스턴스 가져오기

  try {
    const response = await fetch('http://10.0.2.2/src/json/po.php'); // API 요청
    const json = await response.json(); // JSON 데이터를 받아옴

    db.transaction((tx) => {
      json.forEach((item: any) => {
        tx.executeSql(
          `INSERT INTO food_nutrition (
            food_group, food_name, energy, water_content, protein, fat, ash,
            carbohydrate, sugars, total_dietary_fiber, calcium, iron, magnesium, 
            phosphorus, potassium, sodium, zinc, copper, manganese, selenium,
            molybdenum, iodine, vitamin_a, thiamin, riboflavin, niacin, 
            pantothenic_acid, vitamin_b6, biotin, folate, vitamin_b12, vitamin_c, 
            vitamin_d, vitamin_e, vitamin_k, total_amino_acids, essential_amino_acids, 
            cholesterol, total_fatty_acids, saturated_fatty_acids, unsaturated_fatty_acids, 
            omega_3_fatty_acids, omega_6_fatty_acids, total_trans_fatty_acids
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            item.식품군,
            item.식품명,
            item.에너지,
            item.수분,
            item.단백질,
            item.지방,
            item.회분,
            item.탄수화물,
            item.당류 || null, // 값이 없으면 null로 처리
            item["총 \n식이섬유"] || null, // 값이 없으면 null로 처리
            item.칼슘,
            item.철,
            item.마그네슘,
            item.인,
            item.칼륨,
            item.나트륨,
            item.아연,
            item.구리,
            item.망간,
            item.셀레늄,
            item.몰리브덴,
            item.요오드 || null, // 값이 없으면 null로 처리
            item.비타민A || null, // 값이 없으면 null로 처리
            item.티아민,
            item.리보플라빈,
            item.니아신,
            item.판토텐산 || null, // 값이 없으면 null로 처리
            item.비타민B6,
            item.비오틴 || null, // 값이 없으면 null로 처리
            item.엽산 || null, // 값이 없으면 null로 처리
            item.비타민B12 || null, // 값이 없으면 null로 처리
            item.비타민C || null, // 값이 없으면 null로 처리
            item.비타민D || null, // 값이 없으면 null로 처리
            item.비타민E || null, // 값이 없으면 null로 처리
            item.비타민K || null, // 값이 없으면 null로 처리
            item["총 아미노산"] || null, // 값이 없으면 null로 처리
            item["총 필수\n아미노산"] || null, // 값이 없으면 null로 처리
            item.콜레스테롤 || null, // 값이 없으면 null로 처리
            item["총 지방산"] || null, // 값이 없으면 null로 처리
            item["총 포화\n지방산"] || null, // 값이 없으면 null로 처리
            item["총 불포화\n지방산"] || null, // 값이 없으면 null로 처리
            item["오메가3 \n지방산"] || null, // 값이 없으면 null로 처리
            item["오메가6 \n지방산"] || null, // 값이 없으면 null로 처리
            item["총 트랜스\n지방산"] || null // 값이 없으면 null로 처리
          ],
          (tx, results) => {
            console.log('Data inserted successfully');
          },
          (tx, err) => {
            console.log('Error inserting data:', err);
          }
        );
      });
    });
  } catch (error) {
    console.log('Fetch error:', error);
  }
};

// SQLite DB에서 데이터를 불러오는 함수
export const loadDataFromDB = (callback: (data: any[]) => void) => {
  const db = getDB(); // DB 인스턴스 가져오기
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM food_nutrition`, // 모든 데이터를 선택하는 SQL 쿼리
      [],
      (tx, results) => {
        const rows = results.rows;
        let data = [];
        for (let i = 0; i < rows.length; i++) {
          data.push(rows.item(i)); // 결과를 배열에 담기
        }
        callback(data); // 결과를 호출한 곳으로 전달
      },
      (err) => {
        console.log('Error loading data:', err);
      }
    );
  });
};

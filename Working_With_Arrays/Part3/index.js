// Viết lại hàm 'calcAverageHumanAge' từ Thử thách #2, nhưng lần này dưới dạng hàm mũi
// tên (arrow function) và sử dụng chaining!

// Dữ liệu kiểm tra:

// Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
// Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]

// Viết lại hàm 'calcAverageHumanAge' dưới dạng hàm mũi tên và sử dụng chaining
const calcAverageHumanAge = ages =>
    ages
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4)) // Tính tuổi của chó theo tuổi của con người
      .filter(humanAge => humanAge >= 18) // Loại bỏ các con chó có tuổi con người dưới 18 tuổi
      .reduce((acc, age, _, arr) => acc + age / arr.length, 0); // Tính tuổi trung bình
  
  // Chạy hàm cho cả hai bộ dữ liệu kiểm tra
  console.log('--- Test Data 1 ---');
  console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); 
  
  console.log('--- Test Data 2 ---');
  console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); 
// Quay lại nghiên cứu của Julia và Kate về chó. Lần này, họ muốn chuyển đổi tuổi của 
// chó sang tuổi của con người và tính toán tuổi trung bình của những con chó trong 
// nghiên cứu của họ.

// Nhiệm vụ của bạn: Tạo một hàm 'calcAverageHumanAge', chấp nhận một mảng tuổi của chó
// ('ages'), và thực hiện các việc sau theo thứ tự:

// Tính tuổi của chó theo tuổi của con người bằng công thức sau: nếu chó <= 2 tuổi,
// humanAge = 2 * dogAge. Nếu chó > 2 tuổi, humanAge = 16 + dogAge * 4.
// Loại bỏ tất cả các con chó có tuổi con người dưới 18 tuổi (tức là giữ lại những
// con chó ít nhất 18 tuổi).
// Tính tuổi trung bình của tất cả các con chó trưởng thành (bạn nên biết cách tính
// trung bình từ các thử thách khác).
// Chạy hàm cho cả hai bộ dữ liệu kiểm tra.
// Dữ liệu kiểm tra:

// Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
// Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]

function calcAverageHumanAge(ages) {
    // Tính tuổi của chó theo tuổi của con người, loại bỏ các con chó có tuổi con người dưới 18 tuổi,
    // và tính tuổi trung bình của tất cả các con chó trưởng thành trong một mạch.
    const averageAge = ages
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4)) // Tính tuổi của chó theo tuổi của con người
      .filter(humanAge => humanAge >= 18) // Loại bỏ các con chó có tuổi con người dưới 18 tuổi
      .reduce((acc, age, _, arr) => acc + age / arr.length, 0); // Tính tuổi trung bình
  
    return averageAge;
  }
  
  // Chạy hàm cho cả hai bộ dữ liệu kiểm tra
  console.log('--- Test Data 1 ---');
  console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
  
  console.log('--- Test Data 2 ---');
  console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); 
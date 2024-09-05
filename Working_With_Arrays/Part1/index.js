// Julia và Kate đang thực hiện một nghiên cứu về chó. Vì vậy, mỗi người trong số họ đã hỏi 5 chủ chó 
// về tuổi của chó của họ và lưu trữ dữ liệu vào một mảng (một mảng cho mỗi người). Hiện tại, họ chỉ 
// quan tâm đến việc biết liệu một con chó là trưởng thành hay còn nhỏ. Một con chó được coi là trưởng 
// thành nếu nó ít nhất 3 tuổi, và nó là còn nhỏ nếu nó dưới 3 tuổi.

// Nhiệm vụ của bạn: Tạo một hàm 'checkDogs', chấp nhận 2 mảng tuổi của chó ('dogsJulia' và 'dogsKate'),
// và thực hiện các việc sau:

// Julia phát hiện ra rằng chủ của con chó đầu tiên và hai con chó cuối cùng thực sự có mèo, không phải 
// chó! Vì vậy, hãy tạo một bản sao nông của mảng của Julia và loại bỏ tuổi của mèo khỏi mảng đã sao 
// chép đó (vì đó là một thực hành xấu để thay đổi các tham số của hàm).
// Tạo một mảng với cả dữ liệu của Julia (đã chỉnh sửa) và Kate.
// Đối với mỗi con chó còn lại, ghi vào console liệu nó là trưởng thành ("Dog number 1 is an adult,
// and is 5 years old") hay còn nhỏ ("Dog number 2 is still a puppy").
// Chạy hàm cho cả hai bộ dữ liệu kiểm tra.
// Dữ liệu kiểm tra:

// Dữ liệu 1: Dữ liệu của Julia [3, 5, 2, 12, 7], Dữ liệu của Kate [4, 1, 15, 8, 3]
// Dữ liệu 2: Dữ liệu của Julia [9, 16, 6, 8, 3], Dữ liệu của Kate [10, 5, 6, 1, 4]

function checkDogs(dogsJulia, dogsKate) {
  // 1. Tạo một bản sao nông của mảng của Julia và loại bỏ tuổi của mèo
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  // slice là hàm để cắt mảng, với 2 tham số đầu vào là vị trí bắt đầu và vị trí kết thúc cần cắt

  // 2. Tạo một mảng với cả dữ liệu của Julia (đã chỉnh sửa) và Kate
  const allDogs = dogsJuliaCorrected.concat(dogsKate);
  // concat là hàm để nối mảng

  // 3. Đối với mỗi con chó còn lại, ghi vào console liệu nó là trưởng thành hay còn nhỏ
  allDogs.forEach((age, i) => {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
}

// 4. Chạy hàm cho cả hai bộ dữ liệu kiểm tra
console.log("--- Test Data 1 ---");
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

console.log("--- Test Data 2 ---");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

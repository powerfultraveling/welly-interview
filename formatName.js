// 設置了 default value 給參數這樣可以：
// 1. 確保不管什麼情況都會回傳 string 符合最小驚奇原則
// 2. 就算是空直也不會噴錯
// 3. 可以簡化下方的判斷邏輯
function formatName(firstName = '', lastName = '') {
    // 用語意化的變數存空白字元，這樣做有兩個原因：
    // 1. 空白字元乍看之下可能不明顯，用變數存可以增加易讀性
    // 2. 從變數名稱可以直接看出它的功能
    const SPACE_BETWEEN_WORDS = ' ';
  
    // 檢查是否 firstName 以及 lastName 都存在，兩個都有的情況下才加上 SPACE_BETWEEN_WORDS
    let formattedLastName = firstName && lastName ? `${SPACE_BETWEEN_WORDS}${lastName}` : lastName;

    const formattedName = `${firstName}${formattedLastName}`;
  
    return formattedName;
}
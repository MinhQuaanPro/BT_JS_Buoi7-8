
let arr = [];        // Mảng chính cho tất cả bài tập từ 1 đến 8
let arrFloat = [];   // Mảng phụ riêng cho Bài 9


function displayArray(array, elementId) {
    const el = document.getElementById(elementId);
    el.innerText = array.length > 0 ? array.join(', ') : 'Chưa có dữ liệu';
}

function updateArrayLength() {
    document.getElementById('arrayLength').innerText = `Số phần tử: ${arr.length}`;
}

function isPrime(num) {
    if (num < 2 || !Number.isInteger(num)) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function getNumber() {
    const input = document.getElementById('inputNum');
    const val = input.value.trim();
    if (val === '' || isNaN(val)) {
        alert('⚠️ Vui lòng nhập một số hợp lệ!');
        return;
    }
    arr.push(parseFloat(val));
    displayArray(arr, 'txtArray');
    updateArrayLength();
    input.value = '';
    input.focus();
}

function getFloat() {
    const input = document.getElementById('inputFloat');
    const val = input.value.trim();
    if (val === '' || isNaN(val)) {
        alert('⚠️ Vui lòng nhập số hợp lệ!');
        return;
    }
    arrFloat.push(parseFloat(val));
    displayArray(arrFloat, 'txtArrayFloat');
    input.value = '';
    input.focus();
}


// 1️⃣ Tổng số dương
function sumPositive() {
    let sum = 0;
    for (let num of arr) if (num > 0) sum += num;
    document.getElementById('txtSum').innerText = 
        sum !== 0 ? `Tổng các số dương là: ${sum}` : '❌ Không có số dương nào';
}

// 2️⃣ Đếm số dương
function countPositive() {
    const count = arr.filter(n => n > 0).length;
    document.getElementById('txtCount').innerText = 
        count > 0 ? `✅ Có ${count} số dương` : '❌ Không có số dương nào';
}

// 3️⃣ Tìm số nhỏ nhất
function findMin() {
    if (arr.length === 0) return document.getElementById('txtMin').innerText = '⚠️ Mảng rỗng!';
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) if (arr[i] < min) min = arr[i];
    document.getElementById('txtMin').innerText = `📉 Số nhỏ nhất là: ${min}`;
}

// 4️⃣ Tìm số dương nhỏ nhất
function findMinPos() {
    const positives = arr.filter(n => n > 0);
    if (positives.length === 0) return document.getElementById('txtMinPos').innerText = '❌ Không có số dương nào';
    let minPos = Math.min(...positives);
    document.getElementById('txtMinPos').innerText = `🎯 Số dương nhỏ nhất là: ${minPos}`;
}

// 5️⃣ Tìm số chẵn cuối cùng
function findEven() {
    let lastEven = null;
    for (let num of arr) if (num % 2 === 0) lastEven = num;
    document.getElementById('txtEven').innerText = 
        lastEven !== null ? `🔍 Số chẵn cuối cùng là: ${lastEven}` : '❌ Không có số chẵn nào';
}

// 6️⃣ Đổi chỗ 2 vị trí
function changePosition() {
    const idx1 = parseInt(document.getElementById('inputIndex1').value);
    const idx2 = parseInt(document.getElementById('inputIndex2').value);
    
    if (isNaN(idx1) || isNaN(idx2) || idx1 < 0 || idx1 >= arr.length || idx2 < 0 || idx2 >= arr.length) {
        alert(`⚠️ Vị trí không hợp lệ! Chỉ được chọn từ 0 đến ${arr.length - 1}`);
        return;
    }
    // Swap
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    displayArray(arr, 'txtChangePos');
    document.getElementById('inputIndex1').value = '';
    document.getElementById('inputIndex2').value = '';
}

// 7️⃣ Sắp xếp tăng dần
function sortIncrease() {
    if (arr.length === 0) return document.getElementById('txtIncrease').innerText = '⚠️ Mảng rỗng!';
    const sorted = [...arr].sort((a, b) => a - b);
    document.getElementById('txtIncrease').innerText = `📈 Mảng đã sắp xếp: ${sorted.join(', ')}`;
}

// 8️⃣ Tìm số nguyên tố đầu tiên
function findPrime() {
    for (let num of arr) {
        if (isPrime(num)) {
            return document.getElementById('txtPrime').innerText = `⭐ Số nguyên tố đầu tiên là: ${num}`;
        }
    }
    document.getElementById('txtPrime').innerText = '❌ Không tìm thấy số nguyên tố nào';
}

// 9️⃣ Đếm số nguyên (trong arrFloat)
function findInt() {
    if (arrFloat.length === 0) return document.getElementById('txtInt').innerText = '⚠️ Chưa nhập dữ liệu!';
    const countInt = arrFloat.filter(n => Number.isInteger(n)).length;
    document.getElementById('txtInt').innerText = `🔢 Có ${countInt} số nguyên trong ${arrFloat.length} số đã nhập`;
}

// 🔟 So sánh số lượng âm và dương
function compareNum() {
    if (arr.length === 0) return document.getElementById('txtCompare').innerText = '⚠️ Mảng rỗng!';
    let pos = arr.filter(n => n > 0).length;
    let neg = arr.filter(n => n < 0).length;
    
    if (pos > neg) document.getElementById('txtCompare').innerText = `📊 Số dương (${pos}) nhiều hơn số âm (${neg})`;
    else if (neg > pos) document.getElementById('txtCompare').innerText = `📊 Số âm (${neg}) nhiều hơn số dương (${pos})`;
    else document.getElementById('txtCompare').innerText = `📊 Số lượng âm và dương bằng nhau (${pos})`;
}


function clearAll() {
    arr = [];
    arrFloat = [];
    displayArray(arr, 'txtArray');
    displayArray(arrFloat, 'txtArrayFloat');
    updateArrayLength();
    // Reset các input
    document.querySelectorAll('input').forEach(input => input.value = '');
    alert('✅ Đã xóa sạch dữ liệu!');
}

function resetAll() {
    if(confirm('🔄 Bạn có chắc muốn tải lại trang không?')) {
        window.location.reload();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Enter cho inputNum
    document.getElementById('inputNum').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); getNumber(); }
    });
    // Enter cho inputFloat
    document.getElementById('inputFloat').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); getFloat(); }
    });
});
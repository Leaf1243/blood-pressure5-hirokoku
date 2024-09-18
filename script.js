document.getElementById('bpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let systolic = parseInt(document.getElementById('systolic').value);
    let diastolic = parseInt(document.getElementById('diastolic').value);
    let result = judgeBloodPressure(systolic, diastolic);

    document.getElementById('result').textContent = `血圧カテゴリ: ${result}`;
});

function judgeBloodPressure(systolic, diastolic) {
    let category = '';

    if (systolic < 120 && diastolic < 80) {
        category = '正常';
    } else if (systolic >= 120 && systolic < 130 && diastolic < 80) {
        category = '高血圧前症';
    } else if ((systolic >= 130 && systolic < 140) || (diastolic >= 80 && diastolic < 90)) {
        category = '高血圧ステージ1';
    } else if (systolic >= 140 || diastolic >= 90) {
        category = '高血圧ステージ2';
    } else if (systolic >= 180 || diastolic >= 120) {
        category = '高血圧緊急症';
    } else {
        category = '不明';
    }

    return category;
}

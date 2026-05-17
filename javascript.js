function sortHouse(house) {
    document.getElementById('question-text').classList.add('hidden');
    document.getElementById('options').classList.add('hidden');
}

const resultDiv = document.getElementById('result');

const houseSpan = document.getElementById('house-name');

resultDiv.classList.remove('hidden');
houseSpan.innerText = house;

if (house === 'Gryffindor') 
    houseSpan.style.color = '#ae0001';
if (house === 'slytherin')
    houseSpan.style.color = '#2a623d';
if (house === 'Ravenclaw')
    houseSpan.style.color = '#222f5b';
if (house === 'Hufflepuff')
    houseSpan.style.color = '#f0c75e';
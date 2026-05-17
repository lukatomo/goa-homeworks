// დავალება 2
import React from 'react';

export default function TwoSections() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      
      {/* Section 1 */}
      <div style={{ padding: '20px', border: '2px solid #007bff', borderRadius: '8px', backgroundColor: '#e6f2ff' }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#007bff' }}>პირველი სექცია (Section One)</h2>
        <p style={{ margin: 0 }}>ეს არის პირველი ბლოკის შიგთავსი. აქ შეგიძლიათ განათავსოთ ნებისმიერი ინფორმაცია.</p>
      </div>

      {/* Section 2 */}
      <div style={{ padding: '20px', border: '2px solid #28a745', borderRadius: '8px', backgroundColor: '#e8f5e9' }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#28a745' }}>მეორე სექცია (Section Two)</h2>
        <p style={{ margin: 0 }}>ეს არის მეორე ბლოკის შიგთავსი, რომელიც ვიზუალურად გამოყოფილია პირველისგან განსხვავებული ფერით.</p>
      </div>

    </div>
  );
}

//დავალება 3
//The Child Component
import React from 'react';

// This component receives 'items' as a prop from App
export default function HobbyList(props) {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>ჩემი ჰობიების სია:</h2>
      
      {/* Rendering the unordered list */}
      <ul>
        {props.items.map((item, index) => (
          <li key={index} style={{ padding: '5px 0', fontSize: '18px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

//The Parent Component
import React from 'react';
import HobbyList from './HobbyList'; // Importing the child component

function App() {
  // Array containing exactly four items
  const myHobbies = ["კოდირება", "კითხვა", "ფოტოგრაფია", "მოგზაურობა"];

  return (
    <div>
      {/* Passing the array as a prop named 'items' */}
      <HobbyList items={myHobbies} />
    </div>
  );
}

export default App;
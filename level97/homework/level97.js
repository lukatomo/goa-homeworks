//დავალება 2
import React from 'react';

export default function ProfileCard() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '300px' }}>
      {/* ადამიანის სახელი */}
      <h2>გიორგი ბერიძე</h2>
      
      {/* მოკლე აღწერა */}
      <p>ვებ-დეველოპერი თბილისიდან. მიყვარს ახალი ტექნოლოგიების სწავლა და მოგზაურობა.</p>
      
      {/* 3 ჰობის სია */}
      <h3>ინტერესები:</h3>
      <ul>
        <li>კოდირება</li>
        <li>ფოტოგრაფია</li>
        <li>ლაშქრობა</li>
      </ul>
    </div>
  );
}

//დავალება 3
import React from 'react';

export default function ImageShowcase() {
  // ცვლადი, რომელიც ინახავს სურათის URL-ს
  const imageUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500";

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* სათაური სურათის ზემოთ */}
      <h2>ულამაზესი სანაპირო</h2>
      
      {/* სურათის ელემენტი დინამიური src ატრიბუტით */}
      <img 
        src={imageUrl} 
        alt="სანაპირო" 
        style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }} 
      />
    </div>
  );
}

//დავლება 4
import React from 'react';

export default function NumberMessage() {
  // ცვლადი, რომელიც ინახავს რიცხვს
  const myNumber = 42;
  
  // ცვლადი შეტყობინებისთვის
  let finalMessage = "";

  // JavaScript ლოგიკა return-მდე
  if (myNumber < 10) {
    finalMessage = "ეს არის პატარა რიცხვი.";
  } else if (myNumber >= 10 && myNumber <= 50) {
    finalMessage = "ეს არის საშუალო ზომის რიცხვი.";
  } else {
    finalMessage = "ეს არის დიდი რიცხვი.";
  }

  return (
    <div style={{ padding: '15px', backgroundColor: '#e9ecef', borderRadius: '5px', marginTop: '20px' }}>
      <h3>რიცხვის შემოწმება</h3>
      <p>არჩეული რიცხვია: <strong>{myNumber}</strong></p>
      {/* შეტყობინების გამოტანა JSX-ში */}
      <p style={{ color: '#007bff', fontWeight: 'bold' }}>{finalMessage}</p>
    </div>
  );
}
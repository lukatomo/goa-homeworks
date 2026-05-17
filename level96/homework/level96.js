// პირველი დავალება
import React from 'react';

function FruitList() {
  // 1. მასივი ელემენტებით
  const fruits = ['ვაშლი', 'ბანანი', 'ფორთოხალი', 'ატამი', 'მარწყვი', 'საზამთრო'];

  return (
    <div>
      <h2>ჩემი საყვარელი ხილი:</h2>
      <ul>
        {/* 2. map() მეთოდით მასივის ციკლში გატარება */}
        {fruits.map((fruit, index) => (
          // React-ში map-ის გამოყენებისას აუცილებელია უნიკალური key ატრიბუტი
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;

//მეორე დავალება
//ომპონენტი (Component) არის React-ის ყველაზე ფუნდამენტური და მთავარი შენების ბლოკი. მარტივად რომ ვთქვათ, ის არის პატარა,
//დამოუკიდებელი და მრავალჯერ გამოყენებადი კოდის ნაჭერი (ფუნქცია),
//რომელიც პასუხისმგებელია ვებ-გვერდის კონკრეტული ნაწილის ვიზუალსა და ლოგიკაზე.
//თუ ვებ-გვერდს წარმოვიდგენთ როგორც Lego-ს კონსტრუქტორს, კომპონენტები არის ამ კონსტრუქტორის ცალკეული კუბიკები.
//რაში გამოვიყენებთ მას რეაქთის აპლიკაციებში?
//მრავალჯერადი გამოყენებისთვის (Reusability): თუ ვებ-გვერდზე გვაქვს, მაგალითად, პროდუქტის ბარათი (Product Card), ჩვენ არ ვწერთ HTML
//კოდს ყოველი პროდუქტისთვის თავიდან.
//ვქმნით ერთ Card კომპონენტს და მას მრავალჯერ ვიყენებთ სხვადასხვა მონაცემებით.
//კოდის ორგანიზებისთვის: დიდი და რთული გვერდი შეგვიძლია დავყოთ პატარა, მარტივად სამართავ ნაწილებად (მაგ: Header, Sidebar, Footer, MainContent).
//დამოუკიდებლობისთვის (Encapsulation): თითოეულ კომპონენტს აქვს თავისი დიზაინი (HTML/CSS) 
//და თავისი ქცევის ლოგიკა (JavaScript/State), რაც იმას ნიშნავს, რომ ერთ კომპონენტში კოდის შეცვლა
//არ აირევს სხვა კომპონენტების მუშაობას.

//მესამე დავალება
import React, { useState } from 'react';

// 1. მთავარი კომპონენტი (სასურველი კომპონენტი)
export default function ProductDashboard() {
  // იმიტირებული მონაცემები
  const [products, setProducts] = useState([
    { id: 1, name: "ლეპტოპი", category: "ელექტრონიკა", price: 2500, stock: 15 },
    { id: 2, name: "სმარტფონი", category: "ელექტრონიკა", price: 1200, stock: 8 },
    { id: 3, name: "საოფისე სკამი", category: "ავეჯი", price: 350, stock: 22 }
  ]);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#f5f5f5' }}>
      
      {/* 2. <header> - სათაურის სექცია */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #ddd', paddingBottom: '15px' }}>
        {/* 3. <h1> - მთავარი სათაური */}
        <h1>ადმინ პანელი</h1>
        
        {/* 4. <nav> - ნავიგაცია */}
        <nav>
          {/* 5. <ul> - ნავიგაციის სია */}
          <ul style={{ display: 'flex', listStyle: 'none', gap: '15px', margin: 0, padding: 0 }}>
            {/* 6. <li> - სიის ელემენტი */}
            <li><a href="#home" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>მთავარი</a></li>
            <li><a href="#products" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>პროდუქტები</a></li>
            <li><a href="#orders" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>შეკვეთები</a></li>
          </ul>
        </nav>
      </header>

      {/* 7. <main> - ძირითადი კონტენტი */}
      <main style={{ marginTop: '20px' }}>
        
        {/* 8. <section> - სტატისტიკის სექცია */}
        <section style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          {/* 9. <article> - სტატისტიკის ბარათი 1 */}
          <article style={{ background: '#fff', padding: '15px', borderRadius: '8px', flex: 1, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            {/* 10. <h3> - ქვესათაური */}
            <h3>სულ პროდუქტი</h3>
            {/* 11. <p> - აბზაცი */}
            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '5px 0 0 0' }}>{products.length}</p>
          </article>

          {/* <article> - სტატისტიკის ბარათი 2 */}
          <article style={{ background: '#fff', padding: '15px', borderRadius: '8px', flex: 1, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3>მარაგის სტატუსი</h3>
            {/* 12. <span> - ტექსტის ხაზოვანი ელემენტი */}
            <span style={{ color: 'green', fontWeight: 'bold' }}>სტაბილური</span>
          </article>
        </section>

        {/* 13. <aside> - გვერდითა პანელი (ფილტრები/ინფორმაცია) */}
        <aside style={{ background: '#e9ecef', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
          {/* 14. <strong> - მნიშვნელოვანი ტექსტი */}
          <strong>შეცხსენება:</strong> <span>გთხოვთ, რეგულარულად განაახლოთ მარაგების რაოდენობა.</span>
        </aside>

        {/* სექცია: პროდუქტების ცხრილი */}
        <section style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2>პროდუქტების სია</h2>
          
          {/* 15. <table> - ცხრილი */}
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            {/* 16. <thead> - ცხრილის თავი */}
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa', textAlign: 'left' }}>
                {/* 17. <th> - ცხრილის სათაურის უჯრა */}
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>ID</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>სახელი</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>კატეგორია</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>ფასი</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>მარაგი</th>
              </tr>
            </thead>
            {/* 18. <tbody> - ცხრილის ტანი */}
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  {/* 19. <td> - ცხრილის სტანდარტული უჯრა */}
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{product.id}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{product.name}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{product.category}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{product.price} ₾</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{product.stock} ცალი</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* სექცია: ახალი პროდუქტის დამატება */}
        <section style={{ marginTop: '30px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2>ახალი პროდუქტის დამატება</h2>
          
          {/* 20. <form> - ფორმა */}
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '40px' }}>
            <div>
              {/* 21. <label> - ლეიბლი ინფუთისთვის */}
              <label htmlFor="prodName" style={{ display: 'block', marginBottom: '5px' }}>პროდუქტის სახელი:</label>
              {/* 22. <input> - ტექსტური ველი */}
              <input type="text" id="prodName" placeholder="მაგ: კლავიატურა" style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>

            <div>
              <label htmlFor="prodCat" style={{ display: 'block', marginBottom: '5px' }}>კატეგორია:</label>
              {/* 23. <select> - ჩამოსაშლელი სია */}
              <select id="prodCat" style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}>
                {/* 24. <option> - ჩამოსაშლელი სიის არჩევანი */}
                <option value="electronics">ელექტრონიკა</option>
                <option value="furniture">ავეჯი</option>
                <option value="clothing">ტანსაცმელი</option>
              </select>
            </div>

            {/* 25. <button> - ღილაკი */}
            <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
              დამატება
            </button>
          </form>
        </section>

      </main>

      {/* 26. <footer> - ფუტერი (ქვედა ნაწილი) */}
      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#777', borderTop: '1px solid #ddd', padding: '15px 0' }}>
        {/* 27. <small> - მცირე ზომის ტექსტი */}
        <small> 2026 ყველა უფლება დაცულია. დამზადებულია React-ში.</small>
      </footer>

    </div>
  );
}
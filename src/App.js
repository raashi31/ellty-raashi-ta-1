import { useEffect, useState } from 'react';
import './App.css';

const pagesData = [{title: "Page 1"}, {title: "Page 2"}, {title: "Page 3"}, {title: "Page 4"}];

function App() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(pagesData);
  }, []);

  //handling all the select/unselect changes on checkboxes
  const handleChange = (e) => {
    const {name, checked} = e.target;
    if(name === "allPages") {
      let tempPages = pages.map((page) => {return {...page, isChecked : checked}});
      setPages(tempPages);
    } else {
      let tempPages = pages.map((page) => page.title === name ? {...page, isChecked : checked} : page);
      setPages(tempPages);
    }
  };

  return (
    <div className="App">
      <div className="modal">
        <div className="checkbox-container">
          <label className="checkbox-label">All pages</label>
          <input 
            type="checkbox" 
            name="allPages"
            onChange={handleChange}
            checked={pages.filter(page => page?.isChecked !== true). length < 1}
          />
        </div>
        <div className="horizontal-line"/>
        {pages.map((page) => (
          <div className="checkbox-container">
            <label className="checkbox-label">{page.title}</label>
            <input 
              type="checkbox" 
              name={page.title} 
              onChange={handleChange}
              checked={page?.isChecked || false}
            />
          </div>
        ))}
        <div className="horizontal-line"/>
        <button type="button" className="done-button">Done</button>
      </div>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import listProjects from '../database/projects.json';
import './Body.css';
import Category from './Category.js';

function Body() {
  const projects = listProjects.map(data => <Category categoryName={data.category} categoryProjects={data.data}/>);

  return (
    <body className="Body">
      {projects}
    </body>
  );
}

export default Body;

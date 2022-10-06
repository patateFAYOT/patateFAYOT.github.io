import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import listProjects from '../database/projects.json';
import './Body.css';
import Category from './Category.js';

function Body() {
  const projects = listProjects.map(data => <Category categoryName={data.category} categoryIcon={data.icon} categoryProjects={data.data}/>);

  return (
    <body className="Body">
      <h1 class="title text-center m-4">Portfolio</h1>
      {projects}
    </body>
  );
}

export default Body;

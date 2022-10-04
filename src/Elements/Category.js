import 'bootstrap/dist/css/bootstrap.css';
import './Category.css';
import Project from './Project.js';

function Category({categoryName, categoryProjects}) {
  const dataProjects = categoryProjects.map(data => <Project name={data.name} date={data.date} description={data.description} link={data.link} skills={data.skills}/>);

  return (
    <section className="Category">
      <h2>{categoryName}</h2>
      {dataProjects}
    </section>
  );
}

export default Category;

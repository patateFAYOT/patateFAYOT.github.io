import 'bootstrap/dist/css/bootstrap.css';
import './Category.css';
import Project from './Project.js';

function Category({categoryName, categoryIcon, categoryProjects}) {
  const dataProjects = categoryProjects.map(data => <Project name={data.name} date={data.date} description={data.description} link={data.link} skills={data.skills}/>);

  return (
    <section className="Category" class="category p-4 m-4">
      <h2 class="title-section">
        <i class={"me-1 bi bi-"+categoryIcon}/>
        {categoryName}
      </h2>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {dataProjects}
        </div>
    </section>
  );
}

export default Category;

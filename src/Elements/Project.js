import 'bootstrap/dist/css/bootstrap.css';
import './Project.css';

function Project({name, date, description, link, skills}) {
  return (
    <div className="Project" class="card" style={{width: "18rem"}}>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
      </div>
      <div class="card-footer">
        {skills}
      </div>
    </div>
  );
}

export default Project;

import 'bootstrap/dist/css/bootstrap.css';
import './Project.css';

function Project({name, date, description, link, skills}) {
  if (link != null) {
    var linkButton = <a href={link} class="btn btn-primary" role="button" data-bs-toggle="button">Lien vers le code</a>;
  } else {
    var linkButton = <a class="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">Aucun dépôt public disponible</a>;
  }

  const listSkills = skills.map(data => <span class="badge text-bg-secondary bg-opacity-100 me-1">{data}</span>);

  return (
    <div class="col">
    <div className="Project" class="card border-primary bg-primary bg-opacity-10 h-100 text-start text-wrap">
      <div class="card-header">
        <h5 class="card-title">{name}</h5>
        <h6 class="card-subtitle text-muted">{date}</h6>
      </div>
      <div class="card-body">
        <p class="card-text">{description}</p>
        <p>{listSkills}</p>
        {linkButton}
      </div>
    </div>
    </div>
  );
}

export default Project;

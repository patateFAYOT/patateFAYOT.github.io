import 'bootstrap/dist/css/bootstrap.css';
import contact from '../database/contact.json';
import './Footer.css';

function Footer() {
  const mail = contact.mail.map(data => <a href={"mailto:"+data} class="list-group-item list-group-item-action list-group-item-primary"><i class="me-1 bi bi-envelope"/>{data}</a>);
  const media = contact.media.map(data => <a href={data.link} class="list-group-item list-group-item-action list-group-item-primary"><i class={"me-1 "+data.icon}/>{data.name}</a>);
  
  return (
    <footer className="Footer" id="footer" class="container-fluid p-3">
      <div class="row">
        <div class="contact col text-end">
          <h2>Contact</h2>
        </div>
        <div class="col ms-3">
          <h5>{contact.firstName + " " + contact.lastName}</h5>
          <div class="row">
            <div class="info col list-group me-3 mb-2">
              {media}
            </div>
            <div class="info col list-group">
              {mail}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

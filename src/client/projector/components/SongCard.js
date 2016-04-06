const top = () =>
  <div className="is-text-left">
    <h1 className="title is-3">Shofukan</h1>
    <h3 className="subtitle is-5">We Like It Here</h3>
  </div>;

const mid = () =>
  <div className="columns is-text-left">
    <div className="column is-half">
      <hr />
      <p className="subtitle is-6">Released</p>
      <p className="title is-4">1996</p>
    </div>
    <div className="column is-half">
      <hr />
      <p className="subtitle is-6">Length</p>
      <p className="title is-4">4:35</p>
    </div>
  </div>;

const desc = () =>
  <div className="is-text-left">
    <p>This is some smooth funkalucious stuff right here</p>
  </div>;

const foot = () =>
  <footer className="card-footer">
    <a class="card-footer-item">Add</a>
  </footer>;

const view = () =>
  <div className="card">
    <div className="card-content">
      {top()}{mid()}{desc()}
    </div>
    {foot()}
  </div>;

export default {
  view,
};

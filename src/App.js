import Card from './components/Card/Card';

function App() {
  return (
    <div
      className='App'
      style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
    >
      <Card imageUrl='https://mir-s3-cdn-cf.behance.net/project_modules/fs/21a81c79807995.5ccefb919847e.jpg'>
        <div class='card-body'>
          <h5 class='card-title'>Card title</h5>
          <p class='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='#' class='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </Card>
      <Card>
        <div class='card-body'>
          <h5 class='card-title'>Card title</h5>
          <p class='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='#' class='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </Card>
    </div>
  );
}

export default App;

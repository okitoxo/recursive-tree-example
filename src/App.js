import logo from './logo.svg';
import './App.css';
import Folder from './components/Folder';

function App() {

  // From filesystem
  const folderData = {
    name: 'foldercito',
    type: 'dir',
    content: [
      {name: 'index.ts', type: 'file'},
      {name: 'test.sh', type: 'file'},
      {name: 'hola.go', type: 'file'},
      {
        name: 'tests',
        type: 'dir',
        content: [
          {name: 'index.ts', type: 'file'},
          {name: 'test.sh', type: 'file'},
          {name: 'hola.go', type: 'file'},
          {
            name: 'tests',
            type: 'dir',
            content: [
              {
                name: 'foldercito',
                type: 'dir',
                content: [
                  {name: 'index.ts', type: 'file'},
                  {name: 'test.sh', type: 'file'},
                  {name: 'hola.go', type: 'file'},
                  {
                    name: 'tests',
                    type: 'dir',
                    content: [
                      {name: 'index.ts', type: 'file'},
                      {name: 'test.sh', type: 'file'},
                      {name: 'hola.go', type: 'file'},
                      {
                        name: 'tests',
                        type: 'dir',
                        content: [
                          {name: 'index.ts', type: 'file'},
                          {name: 'test.sh', type: 'file'},
                          {name: 'hola.go', type: 'file'},
                          {name: 'index.ts', type: 'file'},
                          {name: 'test.sh', type: 'file'},
                          {name: 'hola.go', type: 'file'},
                        ]
                      }
                    ]
                  }
                ]
              },
              {name: 'index.ts', type: 'file'},
              {name: 'test.sh', type: 'file'},
              {name: 'hola.go', type: 'file'},
              {name: 'index.ts', type: 'file'},
              {name: 'test.sh', type: 'file'},
              {name: 'hola.go', type: 'file'},
            ]
          }
        ]
      }
    ]
  }

  return (
    <div>
      <Folder folderData={folderData}/>
    </div>
  );
}

export default App;

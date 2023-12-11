import { Post } from "./components/Post/Post";
import { Todo } from "./components/Todo/Todo";

function App() {
  const postData = {
    title: 'Post number1',
    description: '!!Hello World!!',
    marked: true
  }
  const postData1 = {
    title: 'Post number 2',
    description: 'Bey World',
    marked: false
  }

  return <div className="App">
    <Post title={postData.title} description={postData.description} marked={postData.marked} />
    <Post {...postData1} />
    <Todo taskTitle="Бранденбургские ворота" taskDescripttion='Бранденбу́ргские воро́та (нем. Brandenburger Tor) — триумфальное сооружение в центре Берлина, столицы Германии. Единственные сохранившиеся из восемнадцати бывших городских ворот, главный символ города.' />
    <Todo taskTitle="Триумфальная арка" taskDescripttion='Триумфальная арка (фр. Arc de triomphe de l’Étoile) — монумент в 8-м округе Парижа на площади Шарля де Голля (Звезды), возведённый в 1806—1836 годах по проекту архитектора французского ампира Жана-Франсуа Шальгрена. ' />
  </div>

}

export default App;

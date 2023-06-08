import { renderTable } from './src/util/renderTable.js';
import { attachSubmitEventHandlerTo } from './src/util/attachEventTo.js';
import { getUserRankTierBy } from './src/api/index.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>팀 짜기</h1>
  <section id="team-container">
    ${renderTable()}
  </section>
`;

const submitEventHandler = async (event) => {
  event.preventDefault();

  // TODO: 리팩토링
  const inputUsername = event.target.children[0].value;

  const res = await getUserRankTierBy(inputUsername);
  console.log(res);
};

// 이벤트 상속하는 식으로 변경하자.
attachSubmitEventHandlerTo(document.querySelectorAll('form'), submitEventHandler);

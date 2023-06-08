import { renderTable } from './src/util/renderTable.js';
import { attachEventHandlerTo } from './src/util/attachEventHandlerTo.js';
import { getUserRankTierBy } from './src/api/index.js';
import { isEmptyObject } from './src/util/isEmptyObject.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>팀 짜기</h1>
  <section id="team-container">
    ${renderTable()}
  </section>
`;

const submitEventHandler = async (event) => {
  event.preventDefault();

  const inputUsername = event.target.children[0].value;

  const res = await getUserRankTierBy(inputUsername);

  const string = getString(res);

  function getString(res) {
    if (isEmptyObject(res)) {
      return null;
    } else {
      return Object.entries(res).reduce((acc, [key, value]) => {
        return acc + `${key}: ${value} `;
      }, '');
    }
  }

  console.log(string);

  renderSearchResult(event.target);

  function renderSearchResult(targetNode) {
    const elementId = targetNode.children[0].id;

    const toBeRenderedHTML = `
      <div id="search_result">
        <a href="https://www.op.gg/summoner/userName=${inputUsername}" target="_blank">${inputUsername}</a>
        <br />
        <label for=${elementId}>${string}</label>
      </div>
    `;

    const isAlreadyRendered = targetNode.children.length > 1;

    if (isAlreadyRendered) {
      targetNode.removeChild(targetNode.children[1]);
    }

    targetNode.innerHTML += toBeRenderedHTML;
  }

  event.target.children[0].value = inputUsername;
};

// 이벤트 상속하는 식으로 변경하자.
attachEventHandlerTo('submit', document.querySelectorAll('form'), submitEventHandler);

const clickEventHandler = (event) => {
  const trElement = event.target.parentElement.parentElement;
  const temp = trElement.children[1].innerHTML;

  trElement.children[1].innerHTML = trElement.children[3].innerHTML;
  trElement.children[3].innerHTML = temp;

  // TODO: 이렇게 갔다 쓰면 안되는데... 수정하자.
  attachEventHandlerTo('submit', document.querySelectorAll('form'), submitEventHandler);
};

attachEventHandlerTo('click', document.querySelectorAll('button'), clickEventHandler);

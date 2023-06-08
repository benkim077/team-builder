export const renderTable = () => {
  return `
    <table>
      <thead>
        ${renderTableHeadContent()}
      </thead>
      <tbody>
        ${renderTableBodyContent()}
      </tbody>
    </table>
  `;
};

const renderTableBodyContent = () => {
  let res = '';

  const LANES = ['Top', 'Jug', 'Mid', 'Adc', 'Sup'];

  const renderLaneFormOf = (lane) => {
    return `
      <tr>
        <td>${lane}</td>
        <td>
          <form>
            <input type="text" placeholder="소환사명" id="blue_${lane}" />
          </form>
        </td>
        <td>
          <button id="change_${lane}">↔️</button>
        </td>
        <td>
          <form>
            <input type="text" placeholder="소환사명" id="red_${lane}" />
          </form>
        </td>
      </tr>
    `;
  };

  res = LANES.reduce((acc, lane) => {
    return acc + renderLaneFormOf(lane);
  }, '');

  return res;
};

const renderTableHeadContent = () => {
  return `
    <tr>
      <th>라인\\팀</th>
      <th>Blue</th>
      <th></th>
      <th>Red</th>
    </tr>
  `;
};

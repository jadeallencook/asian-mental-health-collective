const STATE_NAME_HASH = {
  ALABAMA: 'AL',
  ALASKA: 'AK',
  'AMERICAN SAMOA': 'AS',
  ARIZONA: 'AZ',
  ARKANSAS: 'AR',
  CALIFORNIA: 'CA',
  COLORADO: 'CO',
  CONNECTICUT: 'CT',
  DELAWARE: 'DE',
  'DISTRICT OF COLUMBIA': 'DC',
  'FEDERATED STATES OF MICRONESIA': 'FM',
  FLORIDA: 'FL',
  GEORGIA: 'GA',
  GUAM: 'GU',
  HAWAII: 'HI',
  IDAHO: 'ID',
  ILLINOIS: 'IL',
  INDIANA: 'IN',
  IOWA: 'IA',
  KANSAS: 'KS',
  KENTUCKY: 'KY',
  LOUISIANA: 'LA',
  MAINE: 'ME',
  'MARSHALL ISLANDS': 'MH',
  MARYLAND: 'MD',
  MASSACHUSETTS: 'MA',
  MICHIGAN: 'MI',
  MINNESOTA: 'MN',
  MISSISSIPPI: 'MS',
  MISSOURI: 'MO',
  MONTANA: 'MT',
  NEBRASKA: 'NE',
  NEVADA: 'NV',
  'NEW HAMPSHIRE': 'NH',
  'NEW JERSEY': 'NJ',
  'NEW MEXICO': 'NM',
  'NEW YORK': 'NY',
  'NORTH CAROLINA': 'NC',
  'NORTH DAKOTA': 'ND',
  'NORTHERN MARIANA ISLANDS': 'MP',
  OHIO: 'OH',
  OKLAHOMA: 'OK',
  OREGON: 'OR',
  PALAU: 'PW',
  PENNSYLVANIA: 'PA',
  'PUERTO RICO': 'PR',
  'RHODE ISLAND': 'RI',
  'SOUTH CAROLINA': 'SC',
  'SOUTH DAKOTA': 'SD',
  TENNESSEE: 'TN',
  TEXAS: 'TX',
  UTAH: 'UT',
  VERMONT: 'VT',
  'VIRGIN ISLANDS': 'VI',
  VIRGINIA: 'VA',
  WASHINGTON: 'WA',
  'WEST VIRGINIA': 'WV',
  WISCONSIN: 'WI',
  WYOMING: 'WY',
};

const STATE_ABBREVATIONS = [
  'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

let map = {};

function init() {
  Tabletop.init({
    key:
      'https://docs.google.com/spreadsheets/d/13cDXVCYmDQrA7dl6x7n-Zfg0-wDQDD37m-s7IPBt9nU/pubhtml',
    callback: loaded,
    simpleSheet: true,
  });
}

window.addEventListener('DOMContentLoaded', init);

function loaded(entries) {
  for (let entry of entries) {
    let { state } = entry;
    state = state.toUpperCase();
    if (STATE_NAME_HASH[state.toUpperCase()]) {
      state = STATE_NAME_HASH[state.toUpperCase()];
    }
    if (STATE_ABBREVATIONS.indexOf(state) !== -1) {
      map[state] = map[state] ? [...map[state], entry] : [entry];
    }
  }
  const dropdown = document.getElementById('states')
  for (let state of Object.keys(map)) {
      const option = document.createElement('option');
      option.innerText = state;
      dropdown.appendChild(option);
  }
  dropdown.addEventListener('change', () => console.log(true))
  document.getElementById('loading').style.display = 'none';
  dropdown.style.display = 'block';
}

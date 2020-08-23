// Front page settings
const fpSettingsContainer = document.getElementsByClassName(
  'frontpage-settings'
)[0];
const settingsTag = fpSettingsContainer.getElementsByTagName('a')[0];
settingsTag.innerHTML = 'Settings <i class="fa fa-cog" aria-hidden="true"></i>';

// add top background div
const secondHeader = document.getElementById('header2nd');

const backgroundDiv = document.createElement('div');
backgroundDiv.className = 'colored-bg';

secondHeader.append(backgroundDiv);

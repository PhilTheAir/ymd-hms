const yyyy = d => d.getFullYear();

const mm = d => ('0' + (d.getMonth() + 1)).slice(-2);

const dd = d => ('0' + d.getDate()).slice(-2);

const hh = d => ('0' + d.getHours()).slice(-2);

const min = d => ('0' + d.getMinutes()).slice(-2);

const ss = d => ('0' + d.getSeconds()).slice(-2);

const dateFormatter = (d, formatter) => {
	switch (formatter) {
		case 'yyyymmdd':
			return `${yyyy(d)}${mm(d)}${dd(d)}`;
		case 'yyyy/mm/dd':
			return `${yyyy(d)}/${mm(d)}/${dd(d)}`;
		case 'yyyy-mm-dd':
			return `${yyyy(d)}-${mm(d)}-${dd(d)}`;
		case 'mmddyyyy':
			return `${mm(d)}${dd(d)}${yyyy(d)}`;
		case 'mm/dd/yyyy':
			return `${mm(d)}/${dd(d)}/${yyyy(d)}`;
		case 'mm-dd-yyyy':
			return `${mm(d)}-${dd(d)}-${yyyy(d)}`;
		case 'ddmmyyyy':
			return `${dd(d)}${mm(d)}${yyyy(d)}`;
		case 'dd/mm/yyyy':
			return `${dd(d)}/${mm(d)}/${yyyy(d)}`;
		case 'dd-mm-yyyy':
			return `${dd(d)}-${mm(d)}-${yyyy(d)}`;
		default:
			return '';
	}
}

const timeFormatter = (d, formatter) => {
	switch (formatter) {
		case 'hhmmss':
			return `${hh(d)}:${min(d)}:${ss(d)}`;
		case 'hhmm':
			return `${hh(d)}:${min(d)}`;
		default:
			return '';
	}
}

module.exports.yyyy = yyyy;
module.exports.mm = mm;
module.exports.dd = dd;
module.exports.hh = hh;
module.exports.min = min;
module.exports.ss = ss;
module.exports.dateFormatter = dateFormatter;
module.exports.timeFormatter = timeFormatter;
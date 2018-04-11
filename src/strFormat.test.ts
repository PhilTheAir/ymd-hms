import { strFormat } from './strFormat';

describe('date format', () => {
  it('should return elements in enum', () => {
    expect(strFormat.yyyymmdd).toBe('yyyymmdd');
    expect(strFormat.yyyymmddSlash).toBe('yyyy/mm/dd');
    expect(strFormat.yyyymmddHyphen).toBe('yyyy-mm-dd');
    expect(strFormat.mmddyyyy).toBe('mmddyyyy');
    expect(strFormat.mmddyyyySlash).toBe('mm/dd/yyyy');
    expect(strFormat.mmddyyyyHyphen).toBe('mm-dd-yyyy');
    expect(strFormat.ddmmyyyy).toBe('ddmmyyyy');
    expect(strFormat.ddmmyyyySlash).toBe('dd/mm/yyyy');
    expect(strFormat.ddmmyyyyHyphen).toBe('dd-mm-yyyy');
    expect(strFormat.hhmmss12).toBe('hh:mm:ss12');
    expect(strFormat.hhmmss24).toBe('hh:mm:ss24');
    expect(strFormat.hhmm12).toBe('hh:mm12');
    expect(strFormat.hhmm24).toBe('hh:mm24');
  });
});

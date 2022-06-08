// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const downloadVCard = (vcard, filename) => {
  const link = document.createElement("a");

  link.setAttribute("href", encodeURI("data:text/vcard;charset=utf-8," + vcard));
  link.setAttribute("download", `${filename}.vcf`);
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

export default downloadVCard;

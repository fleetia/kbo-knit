import * as s from './BuyMeCoffee.css';

const BMC_URL = 'https://buymeacoffee.com/starlight.space';

export function BuyMeCoffee() {
  return (
    <div className={s.wrapper}>
      <a href={BMC_URL} target="_blank" rel="noopener noreferrer" className={s.button}>
        ☕ 프로젝트가 맘에 들었다면?
      </a>
    </div>
  );
}

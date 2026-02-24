import { useEffect, useState, type JSX } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import FormBzy from './component/FormBzy';
import type { BzyType } from './schemas/bzy.schemas';
import axios from 'axios';

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [kbzy, setKbzy] = useState<BzyType | null>(null);
  const [messages, setMessages] = useState('');

  let protein = 0;
  let fats = 0;
  let carbohydrates = 0;
  let calories = 0;

  useEffect(() => {
    if (messages) {
      setLoading(true);
    }
  }, [messages]);

  // console.log(messages);
  console.log(loading);

  const clickHandler = async (e: React.FormEvent): Promise<void> => {
    const question = `Белков${Math.round(protein)}, Жиров ${Math.round(
      fats,
    )}, Углеводов ${Math.round(carbohydrates)}, Калории ${Math.round(calories)}`;
    setLoading(false);
    const respons = await axios.post('api/ai/completions', { question });
    setMessages(respons.data.answer);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    setKbzy(data);
  };

  if (kbzy?.goal === 'gain') {
    protein += +kbzy?.weight + +kbzy?.weight + +kbzy?.weight / 3;
    carbohydrates +=
      +kbzy?.weight + +kbzy?.weight + +kbzy?.weight + +kbzy?.weight + +kbzy?.weight / 3;
    fats += +kbzy?.weight / 1.5;
    calories += +kbzy?.weight * 30;
  }

  if (kbzy?.goal === 'loss') {
    protein += +kbzy?.weight + +kbzy?.weight / 1.15;
    carbohydrates += +kbzy?.weight + +kbzy?.weight + +kbzy?.weight / 5;
    fats += +kbzy?.weight / 3;
    calories += +kbzy?.weight * 22;
  }

  if (kbzy?.goal === 'maintenance') {
    protein += +kbzy?.weight + +kbzy?.weight;
    carbohydrates += +kbzy?.weight + +kbzy?.weight + +kbzy?.weight / 3;
    fats += +kbzy?.weight / 2;
    calories += +kbzy?.weight * 26.5;
  }

  if (kbzy?.activity === '1') {
    protein += +kbzy?.weight / 5;
    carbohydrates += +kbzy?.weight + +kbzy?.weight / 5;
    fats += +kbzy?.weight / 6.5;
    calories += +kbzy?.weight * 3;
  }

  if (kbzy?.activity === '1.2') {
    protein += +kbzy?.weight / 4;
    carbohydrates += +kbzy?.weight + +kbzy?.weight / 4;
    fats += +kbzy?.weight / 5.5;
    calories += +kbzy?.weight * 6;
  }

  if (kbzy?.activity === '1.375') {
    protein += +kbzy?.weight / 3;
    carbohydrates += +kbzy?.weight + +kbzy?.weight / 3;
    fats += +kbzy?.weight / 4.5;
    calories += +kbzy?.weight * 11;
  }

  if (kbzy?.activity === '1.55') {
    protein += +kbzy?.weight / 2;
    carbohydrates += +kbzy?.weight + +kbzy?.weight / 2;
    fats += +kbzy?.weight / 3.5;
    calories += +kbzy?.weight * 14;
  }

  if (kbzy?.activity === '1.9') {
    protein += +kbzy?.weight / 1.25;
    carbohydrates += +kbzy?.weight + +kbzy?.weight;
    fats += +kbzy?.weight / 2.5;
    calories += +kbzy?.weight * 17;
  }

  return (
    <div className="street-style">
      <Container fluid className="street-header p-4 ">
        <Row>
          <Col>
            <h1 className="street-title mb-0">ДОБРО ПОЖАЛОВАТЬ</h1>
            <div className="street-tag mt-2">ТВОЙ ЛИЧНЫЙ ДИЕТОЛОГ</div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="street-card p-4">
              <h4 className="street-subtitle mb-3">ЧТО ТАКОЕ КБЖУ И ДЛЯ ЧЕГО ОН НУЖЕН?</h4>
              <div className="street-divider mb-4"></div>
              <p className="street-text">
                КБЖУ — это аббревиатура, которая расшифровывается как{' '}
                <span className="highlight">КАЛОРИИ, БЕЛКИ, ЖИРЫ, УГЛЕВОДЫ</span>. Это четыре
                ключевых параметра, которые определяют питательную ценность пищи и помогают
                контролировать рацион.
              </p>

              <div className="street-grid mt-4">
                <div className="grid-item">
                  <div className="grid-number">1</div>
                  <div className="grid-label">КАЛОРИИ</div>
                  <div className="grid-desc">Энергия для жизни</div>
                </div>
                <div className="grid-item">
                  <div className="grid-number">2</div>
                  <div className="grid-label">БЕЛКИ</div>
                  <div className="grid-desc">Строительный материал</div>
                </div>
                <div className="grid-item">
                  <div className="grid-number">3</div>
                  <div className="grid-label">ЖИРЫ</div>
                  <div className="grid-desc">Источник энергии</div>
                </div>
                <div className="grid-item">
                  <div className="grid-number">4</div>
                  <div className="grid-label">УГЛЕВОДЫ</div>
                  <div className="grid-desc">Топливо для тела</div>
                </div>
              </div>

              <p className="street-text mt-4">
                <span className="street-badge">ЗАЧЕМ ЭТО НУЖНО?</span> Трекер КБЖУ помогает
                достигать целей — будь то похудение, набор массы или поддержание формы. Контролируя
                баланс нутриентов, ты строишь свое тело осознанно, как настоящий уличный атлет.
              </p>

              <div className="street-quote mt-4 p-3">
                <div className="quote-icon"></div>
                <div className="quote-text">Твое тело — твой проект. КБЖУ — чертежи.</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <FormBzy handleSubmit={handleSubmit} />
      </Container>
      {kbzy ? (
        <>
          <Container className="mt-5">
            <Row className="justify-content-center">
              <Col md={10} lg={8}>
                <div className="street-card p-4">
                  <h4 className="street-subtitle mb-3">ВАШИ РЕЗУЛЬТАТЫ КБЖУ</h4>
                  <div className="street-divider mb-4"></div>

                  <div className="user-info mb-4 p-3">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="info-item">
                          <span className="info-label">Цель:</span>
                          {kbzy.goal === "gain" && <span className="info-value">Набор мышечной массы</span>}
                          {kbzy.goal === "loss" && <span className="info-value">Похудение</span>}
                          {kbzy.goal === "maintenance" && <span className="info-value">Удержание веса тела</span>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info-item">
                          <span className="info-label">Вес:</span>
                          <span className="info-value">{kbzy.weight} кг</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="results-grid mb-4">
                    <div className="result-card">
                      <div className="result-icon" style={{ background: '#ff6b35' }}>
                        🔥
                      </div>
                      <div className="result-content">
                        <div className="result-value">{Math.round(calories)}</div>
                        <div className="result-label">КАЛОРИЙ</div>
                        <div className="result-desc">в день</div>
                      </div>
                    </div>

                    <div className="result-card">
                      <div className="result-icon" style={{ background: '#00b894' }}>
                        💪
                      </div>
                      <div className="result-content">
                        <div className="result-value">{Math.round(protein)} г</div>
                        <div className="result-label">БЕЛКА</div>
                        <div className="result-desc">
                          {Math.round((protein / +kbzy.weight) * 100) / 100} г/кг
                        </div>
                      </div>
                    </div>

                    <div className="result-card">
                      <div className="result-icon" style={{ background: '#0984e3' }}>
                        ⚡
                      </div>
                      <div className="result-content">
                        <div className="result-value">{Math.round(fats)} г</div>
                        <div className="result-label">ЖИРОВ</div>
                        <div className="result-desc">
                          {Math.round((fats / +kbzy.weight) * 100) / 100} г/кг
                        </div>
                      </div>
                    </div>

                    <div className="result-card">
                      <div className="result-icon" style={{ background: '#fdcb6e' }}>
                        🍞
                      </div>
                      <div className="result-content">
                        <div className="result-value">{Math.round(carbohydrates)} г</div>
                        <div className="result-label">УГЛЕВОДОВ</div>
                        <div className="result-desc">
                          {Math.round((carbohydrates / +kbzy.weight) * 100) / 100} г/кг
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="macros-breakdown">
                    <h5 className="breakdown-title">РАСПРЕДЕЛЕНИЕ МАКРОНУТРИЕНТОВ</h5>
                    <div className="macros-bars">
                      <div className="macro-bar protein" style={{ width: '30%' }}>
                        <span className="bar-label">
                          Белки {Math.round(((protein * 4) / calories) * 100)}%
                        </span>
                      </div>
                      <div className="macro-bar fats" style={{ width: '25%' }}>
                        <span className="bar-label">
                          Жиры {Math.round(((fats * 9) / calories) * 100)}%
                        </span>
                      </div>
                      <div className="macro-bar carbs" style={{ width: '45%' }}>
                        <span className="bar-label">
                          Углеводы {Math.round(((carbohydrates * 4) / calories) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="recommendations mt-4 p-3">
                    <div className="recommendation-title">💡 РЕКОМЕНДАЦИИ</div>
                    <ul className="recommendation-list">
                      <li>Пейте 2-3 литра воды в день</li>
                      <li>Распределите белок равномерно в течение дня</li>
                      <li>Потребляйте сложные углеводы до тренировки</li>
                      <li>Используйте качественные источники жиров</li>
                    </ul>
                  </div>

                  <Button
                    onClick={clickHandler}
                    className="street-form-button ai-button mt-4"
                    variant="primary"
                  >
                    <span className="button-text">🤖 ПОЛУЧИТЬ ПЛАН ПИТАНИЯ</span>
                    <span className="button-icon">→</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
          {loading ? (
            <></>
          ) : (
            <div className="loading-overlay">
              <div className="loading-card">
                <div className="loading-spinner"></div>
                <div className="loading-text">ГЕНЕРАЦИЯ ПЛАНА ПИТАНИЯ</div>
                <div className="loading-progress">
                  <div className="loading-progress-bar"></div>
                </div>
                <p style={{ color: '#aaa', marginTop: '20px', fontSize: '0.9rem' }}>
                  Искусственный интеллект анализирует ваши данные...
                </p>
              </div>
            </div>
          )}
          {messages && (
            <Container className="mt-4">
              <Row className="justify-content-center">
                <Col md={10} lg={8}>
                  <div className="ai-response">
                    <h5 className="ai-response-title">ПЕРСОНАЛЬНЫЙ ПЛАН ПИТАНИЯ</h5>
                    <div className="street-divider mb-4"></div>
                    <div className="ai-response-content">
                      {messages.split('\n').map((line, index) => (
                        <p key={index} className="mb-3">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          )}
        </>
      ) : (
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="street-placeholder">
                <h4 className="placeholder-text">ТУТ БУДУТ ВАШИ РЕЗУЛЬТАТЫ</h4>
                <div className="placeholder-subtext">
                  Заполните форму выше для расчета вашего КБЖУ
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default App;

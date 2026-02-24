
import type { FormEvent, JSX } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

type FormBzyProps = {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}


function FormBzy({ handleSubmit } : FormBzyProps): JSX.Element {


  return (
    <div className="street-form-container mt-5">
      <div className="street-form-card p-4">
        <h3 className="street-form-title mb-4">РАССЧИТАЙ СВОЙ КБЖУ</h3>
        <div className="street-form-divider mb-4"></div>
        
        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group controlId="formAge">
                <Form.Label className="street-form-label">ВОЗРАСТ</Form.Label>
                <Form.Control 
                  type="number" 
                  name="age" 
                  className="street-form-control"
                  placeholder="25"
                  min="15"
                  max="100"
                  required
                />
              </Form.Group>
            </Col>
            
            <Col md={6}>
              <Form.Group controlId="formHeight">
                <Form.Label className="street-form-label">РОСТ</Form.Label> 
              <Form.Control 
                  type="number" 
                  name="height" 
                  className="street-form-control"
                  placeholder="180"
                  min="100"
                  max="250"
                  required
                />
                
              </Form.Group>
            </Col>
            
            <Col md={6}>
              <Form.Group controlId="formWeight">
                <Form.Label className="street-form-label">ВЕС</Form.Label>
                <Form.Control 
                  type="number" 
                  name="weight" 
                  className="street-form-control"
                  placeholder="75"
                  min="30"
                  max="200"
                  step="0.5"
                  required
                />
         
              </Form.Group>
            </Col>
            
            <Col md={6}>
              <Form.Group controlId="formGender">
                <Form.Label className="street-form-label">ПОЛ</Form.Label>
                <div className="street-radio-group">
                  <Form.Check
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    label="МУЖ"
                    className="street-radio"
                  />
                  <Form.Check
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    label="ЖЕН"
                    className="street-radio"
                  />
                </div>
              </Form.Group>
            </Col>
            
            <Col md={12}>
              <Form.Group controlId="formActivity">
                <Form.Label className="street-form-label">УРОВЕНЬ АКТИВНОСТИ</Form.Label>
                <Form.Select name="activity" className="street-form-select" required>
                  <option value="">Выбери уровень активности</option>
                  <option value="1.2">Сидячий образ жизни (мало движения)</option>
                  <option value="1.375">Легкая активность (1-3 тренировки в неделю)</option>
                  <option value="1.55">Умеренная активность (3-5 тренировок)</option>
                  <option value="1.725">Высокая активность (6-7 тренировок)</option>
                  <option value="1.9">Экстремальная активность (профессиональный спорт)</option>
                </Form.Select>
              </Form.Group>
            </Col>
            
            <Col md={12}>
              <Form.Group controlId="formGoal">
                <Form.Label className="street-form-label">ЦЕЛЬ</Form.Label>
                <Form.Select name="goal" className="street-form-select" required>
                  <option value="">Выбери цель</option>
                  <option value="loss">ПОХУДЕНИЕ</option>
                  <option value="maintenance">УДЕРЖАНИЕ МАССЫ</option>
                  <option value="gain">НАБОР МЫШЕЧНОЙ МАССЫ</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          
          <div className="street-form-actions mt-4">
            <Button 
              type="submit" 
              className="street-form-button"
              variant="primary"
            >
              <span className="button-text">РАССЧИТАТЬ КБЖУ</span>
              <span className="button-icon">→</span>
            </Button>
            
            <div className="street-form-note mt-3">
              <span className="note-icon">⚡</span>
              <span className="note-text">Расчет займет меньше секунды</span>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default FormBzy;
import React, { Component } from 'react';
import './sass/all.scss';
import './assets/icon-font.css';

class App extends Component {

render() {
    return (
		<main className="wrapper">
			<section className="section section-todo">
			<div className="todo">
				<h1 className="heading-primary">
					<span className="heading-primary--main">Todo List</span>
					<span className="heading-primary--sub">Built by Phy  for her CSS AND SASS. Copyright © by Phy.</span>
				</h1>
				<ul className="todo__list">
				<li className="todo__item">
					<div className="form__checkbox-group">
						<input type="checkbox" className="form__checkbox-input" id="r1" />
						<label for="r1" className="form__checkbox-label">
							<span className="form__checkbox-button"></span>									         
						</label>               
					</div>
					<div className="todo__content">
						<div className="form__group">
							<input className="form__input" placeholder="請輸入" type="text" />
						</div>
					</div>
					<div className="todo__actions">
						<a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
						<a href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
					</div>
				</li>
				<li className="todo__item">
					<div className="form__checkbox-group">
						<input type="checkbox" className="form__checkbox-input" id="r2" />
						<label for="r2" className="form__checkbox-label">
						<span className="form__checkbox-button"></span>									         
						</label>               
					</div>
					<div className="todo__content">
						<div className="form__group">
							<input className="form__input" placeholder="請輸入" type="text" />
						</div>
					</div>
					<div className="todo__actions">
						<a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
						<a href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
					</div>
				</li>
				<li className="todo__item">
					<div className="form__checkbox-group">
						<input type="checkbox" className="form__checkbox-input" id="r3" />
						<label for="r3" className="form__checkbox-label">
							<span className="form__checkbox-button"></span>									         
						</label>               
					</div>
					<div className="todo__content">
						<div className="form__group">
							<input className="form__input" placeholder="請輸入" type="text" />
						</div>
					</div>
					<div className="todo__actions">
						<a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
						<a href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
					</div>
				</li>
				<li className="todo__item--complete">
					<div className="form__checkbox-group">
						<input type="checkbox" className="form__checkbox-input" id="r4" />
						<label for="r4" className="form__checkbox-label">
							<span className="form__checkbox-button"></span>									         
						</label>               
					</div>
					<div className="todo__content">
						<div className="form__group">
							<input className="form__input" placeholder="請輸入" type="text" />
						</div>
					</div>
					<div className="todo__actions">
						<a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
						<a href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
					</div>
				</li>
				<h5>新增任務</h5>	
				<li className="todo__item--add">						
					<div className="todo__content">
						<div className="form__group">
							<input className="form__input" placeholder="請輸入" type="text" />
						</div>
					</div>
					<div className="todo__actions">
						<a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>送出</a>
						<a href='./'><i className="todo__icon icon-basic-trashcan"></i>取消</a>
					</div>
				</li>
				</ul>
			</div>
			</section>
		</main>
    );
  }
}

export default App;

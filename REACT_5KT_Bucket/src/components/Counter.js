import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { incrementCount, decrementCount, addToCart, removeFromCart  } from "../store/countReducer"


function Counter(){
    const items = useSelector(store => store.count)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('myAppData', JSON.stringify(items))
    }, [items])

    return(
        <div>
        <h1>Корзина</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.title} - {item.count}
              <button onClick={() => dispatch(incrementCount(item.id))}>+</button>
              <button onClick={() => dispatch(decrementCount(item.id))}>-</button>
              {item.count < 1 && (
                <button onClick={() => dispatch(removeFromCart(item.id))}>Удалить</button>
              )}
            </li>
          ))}
        </ul>
        <button onClick={() => dispatch(addToCart(prompt('Введите название товара:')))}>
          Добавить в корзину
        </button>
      </div>
    )

}


export default Counter
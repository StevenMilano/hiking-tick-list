import React from 'react'
import HikeCard from '../HikeCard/HikeCard'

export default function TickList() {
    return (
        <div>
            <header role="banner">
        <h1>My hikes</h1>
      </header>
      <section>
          <form action="/action_page.php">
            <label for="trail">Trail</label>
            <input type="text" id="trail" name="trail" placeholder="Appalachian trail"/>
            <label for="Length">address</label>
            <input type="text" id="address" name="address" placeholder="Appalachian trail"/>
            <select name="completed" id="completed">
              <label for="completed">Completed Hike</label>
              <option value="True">True</option>
              <option value="False">Flase</option>
            </select>
            <button>Filter</button>
          </form>
          <HikeCard />
      </section>
        </div>
    )
}

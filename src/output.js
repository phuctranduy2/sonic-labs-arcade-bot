import { PRIVATE_KEYS } from './config.js'

class Output {
  log(app, message, waiting = 'running') {
    const accountIndex = PRIVATE_KEYS.indexOf(app.account) + 1
    
    console.log(`[Tài khoản ${accountIndex}] ${message}`)
    
    if (app.today_points && app.today_points !== '-') {
      console.log(`Points: ${app.today_points}`)
    }

    if (app.gameStatus) {
      const games = {
        plinko: app.gameStatus.plinko?.message,
        wheel: app.gameStatus.singlewheel?.message,
        mines: app.gameStatus.mines?.message
      }

      Object.entries(games).forEach(([game, status]) => {
        if (status && !status.includes('pending')) {
          console.log(`${game}: ${status}`)
        }
      })
    }
  }

  clearInfo() {
//    console.clear()
  }

  clear() {
  }
}

export default new Output()
state.squadrons = [
  {
    name: "Brad's Goons",
    number: 5,
    faction: "Rebel",
  },
  {
    name: "Mitch's Mighty Minions",
    number: 7,
    faction: "Imperial"
  },
  {
    name: "The Rebel Alliance",
    number: 1,
    faction: "Rebel"
  },
  {
    name: "The Empirials Strikers",
    number: 50,
    faction: "Imperial"
  }
]

state.newSquadron = {}

on('click', '.squadron-link', event => {
  let id = parseInt(event.data.id)
  show('squadron', { id: id })
})

show('home')

on('click', '.return-button', () => {
  show('home')
})

on('click', '.new-squad', () => {
  show('new')
})

on('click', '.save', () => {
  state.squadrons.push(state.newSquadron)
  state.newSquadron = {}
  show('home')
})

// Remember the new squadron name when we type.
on('change', '.squadron-name', event => {
  state.newSquadron.name = event.value
})

on('change', '.squadron-number', event => {
  state.newSquadron.number = parseInt(event.value)
})

on('change', '.squadron-faction', event => {
  state.newSquadron.faction = event.value
})

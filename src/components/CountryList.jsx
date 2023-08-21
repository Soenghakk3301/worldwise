import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
import Message from './Message'
import Spinner from './Spinner'

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />

  if (!cities.length)
    return (
      <Message
        message={'Add your first city by clicking on a city on the map'}
      />
    )

  const countrires = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }]
    else return arr
  }, [])

  return (
    <ul className={styles.countryList}>
      {countrires.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  )
}

export default CountryList

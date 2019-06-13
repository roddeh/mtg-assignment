const DEFAULT_SETTINGS = {
  types:['Creature']
}

let values 

const settings = {
  initialise(){
    values = DEFAULT_SETTINGS
    // While this method is currently synchronous, it would likely be made async in the future.
    // For example, we may store the user settings online.
    // Make it async now, so that the consumer of settings data can remain unchanged.
    return Promise.resolve()
  },

  checkInit(){
    if(!values){
      throw new Error('Settings have not been initialised.')
    }
  },

  // Prevent mutation of the settings values by providing explicit methods for access.
  types(){
    this.checkInit()
    // Slice the value to prevent mutation
    return values.types.slice()
  }

}

export default settings
# Solution Overview

I have used React to develop this project as it provides a simple rendering solution for JSON driven websites.

For styling I went for vanilla CSS.  For more complex requirements I would use consider using a CSS pre-processing language like stylus.  Alternatively I would consider using one of the 'styled components' libraries commonly being used in React apps. Though I do not have hands on experience with these libraries as yet.

The service communication with the API is handled through the service.js utility.

For now the settings.js is pretty redundant, the idea would be to model the user specific settings e.g. sorting/filtering preferences.  This could initially be stored in local-storage or remotely.  For the scope of the assignment it is merely a placeholder serving up default values.

The loader, header and card views are very simple stateless React components.  The bulk of the application logic exists in cards.js.  This view oversteps the bounds of a typical view.  It models more state than I would consider appropriate for a larger application, but for the scope of the assignment I wanted to keep things simple.  On a larger application I would expect a model/collection to be responsible for containing the complete set of cards that are currently loaded and for the cards view to merely render what is available.

One gotcha that I discovered when working with the API is that some cards seem to be missing an imageURL.  I filtered these out at the service layer.  However, the filtering does create a problem of future requests for subsequent pages getting confused about which page we are currently on.  I solved this by keeping track of the number of cards that have been filtered out as we continue to load more.






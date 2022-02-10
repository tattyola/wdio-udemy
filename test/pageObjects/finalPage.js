class FinalPage{

    get countryField() {return $('#country')}
    get waitingElipsis() {return $('.lds-ellipsis')}
    get desiredCountr() {return $('=India')}
    get purchase() {return $('[type="submit"]')}
    get successAlert() {return $('div .alert-success')}

}

module.exports = new FinalPage()
function formatName(firstName = '', lastName = '') {
    const SPACE_BETWEEN_WORDS = ' ';
  
    let formattedLastName = firstName && lastName ? `${SPACE_BETWEEN_WORDS}${lastName}` : lastName;

    const formattedName = `${firstName}${formattedLastName}`;
  
    return formattedName;
}
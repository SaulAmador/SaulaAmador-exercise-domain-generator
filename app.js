let pronoun = ['the', 'our', 'they'];
let adj = ['great', 'big', 'difficult']
let noun = ['jogger', 'racoon', 'bubble'];
let extensions = ['.com', '.net', '.us', '.io', '.es', '.hot'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extensions.length; l++) {
                let domainName = pronoun[i] + adj[j] + noun[k] + extensions[l];
                console.log(domainName);
                
            }
        }
    }
}


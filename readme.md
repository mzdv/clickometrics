clickometrics
=============
Keystroke dynamics biometrics PoC written in Javascript.

How does it work?
=================

The way keystroke dynamics works is simple - it measures the time between key presses, duration of key press, number of
mistakes etc. and then performs a comparison with the gathered and parsed data. This is a very simple explanation, but
it sums up the whole idea nicely.

This program allows you to perform *very basic* keystroke dynamics enrollment and verification.

This project uses only the time between keystrokes of letters, words, short sentences and long sentences. The data that
is required to be input consists of seven short sentences and seven long sentences, picked randomly from a pool of ten
sentences.

After the user enrolls himself by typing up the sentences coming up in the terminal, he is able to verify if the 
gathered data is correct and to see the percentage of match between verification and enrollment data.

Running
=======

Must run it from the terminal using `node index.js --enrollment` if you want to enroll your keystroke data.

If you want to verify your keystroke data, run it from the terminal using `node index.js --verification`.


License
=======
MIT
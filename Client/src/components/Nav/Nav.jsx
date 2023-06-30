import React from "react";
import styles from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, onAddRandom }) {

   return (
      <nav className={styles.navbar}>

         <div className={styles.principio}>
            <div className={styles.logo}>
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAWdElEQVR4nO1dB3hUVfY/kzqTyaRn0nulBQLSQUjoVYogPSAIgiAIUoM0RekQBQwgqBGCFGlBqmCFVSGwi3V3dZv+97+sq6yrq2vL2e93573Jm8nMZFoywybn+86nvHm5795z3j39nkfUCI3QCPUHMUT0GREdI6IE8g7QE9EVIjpPDRByiYglvEVERV7AjPcVc9JSAwMfIvqXggDA00SU6CFmvGc2l0xqgPAGFh/aczD7Bod4arfo5Z0RmJLJgckZ8jy6UAOEzVh89ISZnLn3FdZ1LKzv3aKXd0ZAYipnvvAK6zr3kJ9/NzVAGIfF6zr14NyT1wUmLFrHvrpQmSj/JKKp9cWM3JPXOXzgKPnZs6gBQhMs3l8fZ2QIsB52i94SM4DR42bIz1xNDRCMij1r30UTptThbtFbYwYw9sHl8vN2UwOFN0GApFXbBEFyjl3h9F0n6mq36G0xA5i4/En5OS9TAwWjYgdB0rYfFpZOHewWfW3MAKaWlMvPuEYNFEwV+4lK9tXqOGv/azWI5cJu0dvDDPGMsnPy2H+lBgo1FLu2VXtOXPGUVaI5uFv09jJDiMzjV5lUPhj3ZyLypQYINRR7yoYyznz+rE3CZdq3Wxxihoy+YRHymLHUQMFEsTuCCdZ3i1PMAAamZcvjtaIGCluUil0QeskGoU/sIWBm2XkObt9NuVtOKsMhWXsvOMRkbetO8jh93bhGDRF1JaLFRFRBRF8S0QeShPA6GG/usaszcjllY5lDhIyf95gyJmZghgX/pjYM7TFIHmOii+mFIUS0kYguE9EPZsFL4OdEpCIvhKbmij184D2snzLPYWJmlp3nkG59xVvuDDOAkXdPkgmGt9keUElrmEJEzxHR72oQ38dHiEKsC+uUrhfT7aLY4x9+XAT6nCForosYM3W+TLASK/P1J6I2RDSbiA4S0RfmDPBRa1jTtJVgbuKyLUYzHk6vZMX9R9Jzt4diz9hziv3CIj3CkPiFa2TCHpDmBsINIqIVUjbxe3MG+EVEcXC7Ozl64oOcsm4P5xx71+LY4YNHy3+zy90E7CrlLe4goqC6UOx+UTGc8UyFXUTMPnyJE5Zu4vABI4W4CkxOZx+N1iguQDB1ZhMO6d6P9ZPmGPSTFaMhec0zMtG+qE38YCdnPHvavjkefIt9gqQ5EeWRm+Efikn+QkS/J6IjRLSKiEZKDp+fK4pd17U3x819zKYTl7B4PWvzO7DKz99cYdaKMJfDeg/h5Md3cm7FNeO4GbsqzMRPEGtbtuOoMdM46dHtgrAuisILVAewzjhplcraomFZXCeiF4hoIRH1J6IUexV7zNQFHNbvbouLS3xki/Av5GeF6bQ8vFcnfrJ4Gl987nH+84Vn+dvKw1z1QQX//a19/EHFdn69bA3vXDmLxw0q4KTYKJO5BqZmcdzcRzm3wrBrYmcs4ZhpC0VsC4x3WRRWVHJAXJL8vLvqgiFQbG+Lt7pDgRAtUF54i3RdegmRISkvS/g1EV0lojKJUZDP8eaKHd548hO7TBaW9eLrHNK1j3Gs/CbpvHfdw/zdtZcE8R3Bj18u5QWTh3NkmM7EVE5avcPtegkvkPSMP9RlSCZTJmLc7OUW5Xrqphc4dtYyDh88Rmx7RVjCElbZ8tjTdx7ngIQUca8+IpT3rZ/Pv7x/wmFGmCOYuWf1HM5OTTDueIiy7EPOiSZLiLVLa5xDdQxC9vsEaji99Khdk8MOwFsImRrWZxhrclpUK2AiTijeWJMZpUeF1YXfu7dtwTff3OsyI8zxh98c5Y0Lp7BGHSieA5GY/vQRl5mRtvWgLNbx8oZQPQBED6vTczjn6DvGiYT1GcqJSzfbKWOvccbukwbrR6FghegqO8/+kXpBpLt7dxaEq3IzM5T4u9M7uU2zTIPi1+o4Zd2zLjEEdKjFr3E7BBPRx3hoxF1jjRNJffJFIaLs3TmWEAoVDhbG7t0pv86ZUSXhvytf4jEDDPExn0C1MIWdmX9W+ausCgiUxXE21SPAc/0BWxMKTJ5QzPTFwoLJfulXTi0IPgOIkpYYw1+9/aLLhP763YP8wtp5PGvsIG7XIpubZSZbvffn907w/ff0M+4UZDMdnX/0+Afk3XGcPADzxeRDw0XmTZ5UaOFAsW0dXQxyIng7VSoVX3h2tVXCZaXEc1R4COekJQhRA+zWtrn4b4vsVE5PjOUzu1aJe1997gke2bcLb1gwmd/at65W6wxGw6j+dxp0SnyyMFTs3t3HrgjnVmJIoScYopJC3xzUvI3RE84+fFmYwXFzVjjEEHjCGAsEtEW0n24c57++XsafnN3FVw9t4XcObBIMvHJwM//m6FPiOt52V6yw1k0NFY2wvuydP7x4iRnvezKqi7jP/4swSNEs4+TSdxwT+iS1ZL99snf/a+wTEMA+PirhL9SH3qiygR+efJo1gQHCWkJG0541wHqUGIIosEehD8IpKl9fTtnwvMkbAz/CntCDHGbof+cdHmdGlYTLphuqGjVNWtY6fzBNYsaXbor1uQzrRSgkOlZ410oll/bUgVoXpM5uLhYEL7w+iP3L+yf4y1/tF/4NFL+le765eoijww3pYuWLZglD7uzjdRWQ1aGVLr0cNhURdvH19RFxKBADFtbWpdN5/fx7uWzNXKEjEJ+6ZcXygl754lK50B/vHtzEJ59eLrzxRx8cz1PHDOLePTpz87xmrI+L5UCNwXDQ6HQcFBbGaq3BSQ2NCOcuHVuLZ/7znQNi3OJpI8VvId37WzdGys6xytcP9/3ooeMVViFDilvVUOgIladuKbe4oISFa8WiO7TMEUT4x+VyTkiKZ33XnqwfOo7jCvuyPi+fI5JTODAoyCT8okJoXKNhHx8f1oSEcFh8PEdn53Jc244c22sg60feK4KWiBLD4cvY/bIwOizNA44q0sL6HgPF8/FSfHrWEJr30QZbzXlEjrhXnk85eSFYDK0krdxmEGcW0qyRwyeKBUFmgyGlKx7gmMJ+9u2wikqHTFN7Maawr5gH5pOXbYgyJ1sIQuYceZt9Q8JkhnQjLwWE30XhgjK0EnnPFA5q2a5Gokib31EsaP+GBY4z5KSTWFEpdB2sO/zXPOQeU1DNEDiVwoqcNLvGONCPih17k4iWe2OqViclsETU17iAE5UiuZS4rMRkUf5xiWJBb7+40ag/IDJiCvsL6yth8QYR84KsVhoMSoQlh92HtACCe9iRyHcgxaofMobjCvqwvkUrDk1I5ABJ7AUFB7MWekSn4wC1mqOycji2/3DBDDxf1iPQRUKPdOtrNQWM7KSCMd9LKdtm5EVgMbQiJ4SUKMV+jAodCAto+7IZfP/YwdyzoBPnNMnmsMgIQUQhEqEzdDr2DzT8LRSzLiyUYxLiOC0zjTt0bMPDBvbghyYNFxFdhE/O7nqUf330Kf781ef5P782jZF9f/0IXy7fwE8vf0AktZRhG3j44hnZzW3uOuTWYdAg5atgzltS/scryn8shlaUmHXgDTHx4CC1Q2brTzeOC6YhKFjXJvJnF58Tc7S3CAO7FMUNqERRMOa3UtUKCug8AqFENIKIvhEE79Dd4uTTtr8kJpyblmiRGAiBWPMTqhxEZ8fC3wX4+wmvHUrcXj0F8QqR6SelEiT8W33qmZZEtIiIXiOin5TmqbKYQYlIXOH3gnZ5NQgBsTGgW1uePX6wTYLh9xc3LrR5j6tjIWCJeTqTWkDQMf7h1azOqHs9g10wnIiekcokq/0DX18RcIwuetCmp46J4n5EWM295OZZKTz/3mH8441jNon43vFtIlwP5Wvpd3eMhaylSDc/VuqSdYc8C6SFov6gSqrk7+UsE7KlQoUau8AvIlpER2EVZR9406H8x9yiISYEGD+4gKeN7Gu3WPn45VKOi47gG8e21vjNHWPJIXm8QO4wu1EvgOi2yj9AuWsmOMqMMKkk0qFdYAsjho4XY62ZO9G4+OtHSjg8JNhhhV2yZBq3zzN4++4ea86EuwzFFlPmuoUhiIJr7+hs7sPAMnUIUM7yqmBGQKDdoXVbiGQWxtuxcqZx8b065fPq2RMcVr7fXz/CWo1amLXuHuvxh4rEPCOGF7m8M0Qgsrq2DWdcHpHS4k4BQssXRWQXpZ+77Cv9tIZCnhLxwc2LjMSI10fyK3tWiwI4+BATh/Xhgo6tuVl2OgdpNEY/JDwshMNDQzgzNYkLO7XhoqG9OSEmkp94qMjtY8nOIV4gZ9YJpxWF2Cp/f2VR4Q7pGIPL4DamBOW1FROUU67AgAB/VgcGcId2bXjWzAd4z549fPr0ab5x4wZrpchscHAwf/XVVwI/+eQTPnfuHJeWlnKL5s14ydSRbh/rxPZlhnvbdnWMEftfMzBCcn6lMlxU0Ke5gxFuZwriXcqwiSCivz9/++23bAmWLFkiCFhcXGzx90WLFvJjs8e7fSzk5g2p6tZ2rQtFHvBBfLQ6pTWFk1Qt3M0ItzJFjmN9dLI6bauPiuCbN2+yMzB50kTetepBt49VebjEED5Jz6nV54iduVRU3ysU9nnp1EC9gEtMkasT/3But5GI3drn89mzZ50iYutWefzGC2vdPtbvz+wU88QLZHEtFZXiQKqiwBr4jqeqT4LlXlj+DpzxAMpnBP/vtWrLaP38yVw0YZzDBPzwww85PibapOLEXWP97c29hnqtsIiaemLvBeVJXrnqBOcNPQpOMUWu8VXW7iJNGxMdyZcuXXKIiH179+INC6aYmK/uGgvevrDI1Joaa0AmVGHGogInnbwEHBZfqgCDp2qeKy9fv4AT4uP4888/t4uAjywt5nYtm1gMjbhjLJw9kf0vS+tABb8iiPh1Hfb9qlumwNvHvZY86XXzJ3OMPppPnTpllXi3bt3iSUUTuHl2ukk+xd1joXjOwJAA6ybugTfEETqF6EKHoTi6HZgCuRs56j7j5K0F/Sq2L+OUxDgu6NaVt27dymfOnOHLly9zeXk5T5t6H0dFhvO0e/rbFVZ3ZSx47mKuKpWYt60j2KLbRPX5+Zt1dYLKbUxBBYiPxrR6xDyDp0RUwB/cvIinjOjHhR3bcIf85jykVxde+/Ak/uP5auvMHnR2LMxPOV/fIK2h+4QVpuBgqOz0SlgmpbY9ruj/hAmhzFJmhqwAB3VvJ8IW+H85fy0jzGDza1W1IIqw7blWGyLNa4mRIqLt68sDu0mEVvnYZApMYQQjFRHdT4ios6eYESKd+xaTEdt87wXjzlg9xxDwQwDP3MoCbl50n8hLoJIR6doqOwiJcey5Zg1RrN2nc2vu1KpJjd9gdIhEm1Yj/o0CPLFTtMG1dpDAsQY5IiG1gXqciALqkxmt5aoTnNNGIRwmJusM7Ax5odERhlLNv1x8tgYRzu9+TITAka2bNXYQlyyZKjznlbPGcs+OrbhlTprDDFk2Y7RIViH/gvG2PTJdVCeCCfH6CF47b5LFQ0I45YuxEHCUr8k7JWr01FqtSRTZRY6crCyAwGnlnPpgxgw5Z4K3QtlPUXaeEHmVF5UcFy2u4ViZtTcXiaK18ybx1BF9ueiuHrxoyt185Mli/teVQw4zBI4e4mZ4w3E4Z+KQHrz4vhH8cukKm9lEZBIxVtOMJOM1RJHlddobaEQqW6FXTtW1iDooPwwdFnKOvGPqBKoN4kpJSBy6wTUs2FFZX+VmkWULL+1bb1LuCoQ1JqSARmuTEShRDR80yrwKpVLqjlEnkG8UUZogjl+wxqZXrmQIzp3jGgqkvZkhp3euFGNBx8jXYHTIYtnSepHACy0cYPS16qtOC3ng7yyJKHNEpBT3KY+rdWndVFxDEZurRPPz9TURO/h/HAByB0PK18+vcbqrWmQ1UVhW10QhBBrTKJjwg2T2Nqd6FVGKOl5LGCUpdShDeVFDexrqetEUwFWipSXG8J9e2WNiOsdEhrmFIU/MNaRw500carw2QFbqY6aJ9aFESHS0qGYEPjSwRupaUacQYeyao1JxzP2L7FNq+y4Khwp/B6WKRcmnXrcsnuoy0cYO7C56n8j/xpijzcqLnMXpo/qLecIyw79XzRpXbfaWvyrWF/fQKqVpO7c+HcEc6XCK0UFSZzUVO0Ccx7PROxGOlFyThJ0yfrCh0ygsHVeJ9t7xbRwbFS5MWRz2QTuO909sdwtD+nVtY3yRBigdw6WbTLKEfuGG/A4RDaB6hlQimimZbt+ZhBV0oaJSHK2WLDWkBFPwZin/Bof23UG4ysMlQs5PuKuQr71U4pYxgU3STRJPYv6WWoKgTaF0z7vkQdBIHT1LajQAM989UvU7tjkcKpwFx30dW+W6jXhVdYByREGdliPmLYupGg7gkbeVu2QgeQlkSt/jqLF7zPthobUfrrtL+VbVAcJQELsiNNwuXanYJVe85RiCpd3zd4uFZicqLZ4P8SY8tGWxmJ+2TSe7GOKtu0QJ3YUDZaXpvnwkGna9p4lfZQHR9Exp3tq3S+YqPXKv2iUqqZucqFOyNHmIMfy+aaFpPtxbsKBdnpgfvjViL0MQNkLxuTfukrEijxCpt9ohKPaB4hpesLfgz++d4JBgQwzO0Rbm3rhLAqSkDMfNWWl14ujiJit2V1r4fXP1EP/21A5h7qKBABDF0ki/Ojsm/BiR9YyJd4gZ3rpLHsJk0D+rtkb78sTtceS+uXpIhMvhLaPjHHonwixF8khu2YQjcsijpCboRW0vznvg0A3yIEjh4nyiPQyBg2nrBK7SOEETTxzRS167WziM6D2paZrvNRZXmNzr19bHWmREVNT8nIj5kbQdK2dyYfs8IUJ6dGgpCqEPbFooDtjUdv4DhXhIeGF8JMhCdVoR2MSpW1uN0uQkFMIi8lxj7l8ogoea3DzhRyk/CGADUdsb7kmGIKgmEv3WmIAWF0hvQlmiOSbuRzjeEmFa5aYLHXN82yPG/ryuIIoW0A/lnn5drXaZQ+mPcAhVKpPvkVhhwC+Saf+R1Eb9mPTlN9DhYSLq4UlmJMkOId4sNApAADJi2ATWde7J6qxmwsmy9jahV5WnlXnVBxV8bOtSg3ee1dTkRVKUjd4nxfWiPC2OaoOddmxh+SQqmmmeIaJSqTiZZ4zu73FmVH1QYWyKiXOQSobgpZLmP5puEzikIPhHCoIvkhbR0UpFH/rH/6IO8DcpvvYEfnP1kDASIK7QQUjJkMgRxu+N4CjabQF+LhyMF8ycOWagRxnyZPE0QXRVoFo4rqhGlAOKiq+DIgv4Pw9Ic/7oo1KJZvqeYMaPN45xRpLxqziKyLVK6A8ca5Ou4dNGDQLwIRVBFGsd5KrqEGEaSwTHR7w6SKL2HBH924xJaJPRICBA+hSq6MfrzJcQqpxEePoadSB8BmCB2bwCpSZlKyXTdhM1IEDvws/AlMEF7euFKWgtCA9fevvRLqQRLOgTtF1llJQqGwK4GxFK6ZzfRJl+9YpWr94IuUT0KQiF2ls4a+5mBg50KnLmn7rrMP//MkTLZ03kahV3dL+GNYWWsEEaoTPkndFgv4frKKiIaLrchhYViSjHObXDdpG0JUQpK/yMjCRDDyxJgSPu1CimnIB46ZN7RhM0NDiIh/U0fCAMLTpQSQ+dICNEEhiH3YBvkiASYHaEGSnmRnAR9NKnUq/bGTdT4s9Sd4UB3h4UvF0hS/oiwdNEdEn6Mtotifjo+fhniQHbiGiUVArbCI3QCI3QCI3QCI1AHoH/AoZryI/ZNfiaAAAAAElFTkSuQmCC"></img>
            </div>

            <div className={styles.navButtons}>
             
               <Link to={"/home"}>
                  <button className={styles.link}> Home </button>
               </Link>

               <Link to={"/favorites"}>
                  <button className={styles.link}>  Favoritos </button>
               </Link>
               
               <Link to={"/about"}>
                  <button className={styles.link}> About </button>
               </Link>


            </div>
         </div>

         <div className={styles.searchBarContainer}>
            <SearchBar onSearch={onSearch} className={styles.searchBar} />
            <button className={styles.buttonRandom} onClick={onAddRandom}> ID Random </button>
         </div>

       




      </nav>
   );
}

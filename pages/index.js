import React from 'react'; //importa para fazer com que o react hooks use o use state
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {/* {seguidores.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`https://github.com/${itemAtual}.png`}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {
  const usuarioAleatorio = 'beatrizmouradev';
  ///avisa o react e ele avisa o browser que a tela precisa mudar (função use state)
  //posicao 0 pega comunidades (Alurakut) e o setComunidades são as posições em diante do arrar (novas comunidades que serão acrescentadas)
  const listaComunidades = [
    {
      id: '1', 
      title: 'I love Sass',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAaVBMVEX////NZ5nMZJfKWpLLXpTLYJXJWJHLYZX+/P357/Tw1uL46/Heob7gp8LpwdPQcJ/nu8/RdaLsydn04er79PfTfKbuz93ltsz25u3OapvWhazjsMjYjLDalLXirMXdnbvy2+XXiK7IUIw+bB/GAAATZUlEQVR4nOVdaYOyug5+bcsyLrgBoqIy5///yMtWaJKCFLDMzM2nc14daUOa9Un6758l8jdZHDy3j+9bdNzv98folr52l9N649tawZLkZ8HudhVcCOF4jLFVSfl/MM8R+T9f0/s6XHqRH6QkeOxdLpx643pijnD32/gvCkRySPO37PVuH/Dh+/Sn2OCvtyve//Y1fBD8kS298pnIjx/5+zfbv2QD35+WXv4MtM4ZYCgAUBiuv5wLyY7xCQyoZeF4Xnofo8kPjq4zkQEVF9zt0nsZR+dpZwCSuCZL78ecgiMfpwU7iPFfphW+dmI+EZDk3pfelgFl6bwiIIk/l97ZUIqjyYagkwmXpTc3iIKrOQfKaCmnJnzqJDdeen/v6bAyUQPMy6PE3HYco/TxyumRRldP9AZU/GvpLb6hiycGbz+PiJzb9hCfQxQWhUl8eazcDl6yaJmtDaSDM5AD+atepZf+DMHX6eFo2SAOtvZjTsFqEAfySHD1Om2G/KIf33Tmxfmp4XR8HcKB/PinwaD915Q8XCILzs/0Es5DrKHD2Wtt/NNJRJjrfGAHUynUvCxMTIhtNu7n7y76LfHz7OPTfecTFtkgcwloaM3Rzz3mW/wsFLN3sbHHj8G0JHGGmODNtPZ56OvG9RtvBdd9TU9/BPAp/CclVO5vFAETq8ssluwGniOCOX5zFjrv++0h48e5Iv4zEATnx+SUtv1CwNxogh7EFKnPYrf5fngKnfudIsa/Zz20B/C065w/PZp2vULA+G1mtZXAwzDvj4+iTa8mYDzKZn8keKBYPmQIej1jfpxRDzS0Vx+5PA/SPp/gUzWh6CfxILn2OIbex6L72w/iwalHGTK+/djigBws6yy/us9BbgxMUgOGpOoDtv/cc96ST4P5hpzrR0Na9cHs+5NP6qfNtTNKZh8uf2xU+VvQV8660+Y8+uAxKChW5cBZLGY64XxOQ97nF7VVjdFisfOhkwU8/TyO7goeuJBpfHaxgAkLJXEQLixVZtl12UR+swGm3KnKeKHk+raDBcy1U/UBruky6qCLBY4lfMwJuCXMyjMRdR0EbivJDYJGZ2fpqSrdO1jg2jLTMVgAXwCbFegtAmPWjuUVJBOPth7b0lrPAudoDVx/gTkk++i0RH8QhL16VwhXYD9uDvUIIW5RL8H6imMflRVpWWDJKygJ19nsPbmmlzZf4Fo8khvIAmFdDPSholV83B4JosVHl/SllwKbLEhh1sY+ZFmrDGwehH87+BbsR4wXnRhwm9C4AzLM/MPZKkIbnTIQNp31GK3AvkLUnQQntbgAzAL7JyHQOIhWE/uYBfahyr6uomZzFSRUs6qMS9ppeGDTMl0IKtF6USHUnATHIi6Q1PQ8+4nUl0YM7IGlaU2Prazn03ViYO8knFekpufYb914UjGwZ5kuFOayRCpZ4yHaWkZ4ow93MzvPVulEl8EseUcnTWGXfwLg9I40LqJrRQy0+Gee2Xg0XgmNFOxoAx3+mYlFykoHqhFtZHNPK41BZivbsWJFN/o2hiLBgtEJlvVRl8EWx2Xq7L5GIw50Edf/uePi2/ioxX1aq+Zhwm0jBkdhLUZV4IK9lgPMWjWPrkhjoAe6ab5r3pf99dQ3c1qrautoS9Fng8HyKSsEePgZ9k+3jpYw5r5GrX4e+iZvZTggMCvMqsOGHR0/fnROinCu2dj1z0FHuqDhWcS0tG/8+NY+bILv7mkpzF142gNdkgES21+V+2Jide8+zUnw6puZxdx0GaegJQ0PDDykRDqZDt/vYqxLwyzYRU7vzKyPtICY0pUsy6i7NmvsHHMEF9FjdzkEQXC5b9NjMfHhzcQ8PqkVzA9DPE9hFNGISRgt6wx2WcxEdBzhlJMS+3ZfyU46OjpY39NrMVaDi+t2csblRXlg5gGHx8HjMFTy+Oo+evEHJ1cwcuHe5Cg3IKGLcWNpf9ublgHCeWXj15z9B39taraDwm/MkaFnvf+vJ+Zwb8RoBJWQXze9KkcXOYKtsT4GoPsX7vGZTV0yEt3pxVlaXxnVWLpO+0fGMZarsOM2ngHgBvuh58DvnclhGMnXMEhzX8DBA1QZK6fn7h9vZuMMpwt8a3MUqI/49U340SS+P6Ird3lNLl9F6e4QJ4ZmPEziU3A4nLQaH5nzOXAKJK88Xbj8cLPZJJuvcR7MOvetuRCFo8E1jjvK+sxTHidnd9nRExGYk0RTVSjr480CFCFplCXb6RBmW2OlsDqYpx6BIXGW6gt6eiHjTyI4pA7cefKwGS4xLDmrDQVxZIub2S1jRQ/sI/DF8ptf744C8mdmm5/kkwhfLDUJHyknchR8PD5pNuwc6VtY7DQ8kPHH7wKXxWaEtu+wbbCKTVQIGX8yFAer7zm7bkkuZWYkShjv0uj2ene9wBodBfyWiR2fkwe0f2NOLEQRURVDZD3xJmOboqOAjfQK06xtHjSRIOaq/IDImvfB7pBVWAn0Oa2KzacTC6J60Zkl6Z2gmZN98Ms7MnxYM2sQC/MWakkTBxMzMOFJMm09ratI6XuoAicHaLHWkZrbgBHE7HRYyEaTce1O2uIQ1oMFKAkpdp4KaAIfl6lExx5MREjFuhSb1ym+OJWBzII8KdxXnEXiQUwl2uY6CRXQNUeh4+sEC+EAIyKxpLkaVARGZBMWqCXa2DWhu/HR1T7e4SSkJKMFeCAhxfmbV4zYBwYk0G5fMTZ9nyKfzxFyE/riCjaMaH+y1UYUSqL96U+0WSSkROjtRxWEIASV8Vuwrp39jgzgjkRunupLSCkp0eSKyHwC0RjucSTNxuRqoBSIqLQwVYJEzwMcEa5gQksqi+p8KOWxz4BqKYjY/GIQ2DQrURaVPtefhSYijNrtKXLe2Izy/1Svdih+yox2VCl8m6WsYKMelx5BFRnrzVk9+MDbKmeibXiWXrIM5ZR0E/akSgqTLD4dcgridTLKfJ6IXTfDjcHsnNscpeplalu5ZS6VJ4qct6dGXnkoU2dq2hHJ1TnYRoyXdyUW+fmiRL+KdsPG/6tEp6Uxg/xaCP6y7ReuSgP5PoLb8YHChjp4zz9UKl9NGkn2WDTZXjXIVgQhudw4J7WuqtJ53ZqqNWrc+UD8nH8HUqRkYyq9xtKUF2E0kCy58aLy325PupTSbCoupqpvanFJntfeoqfDvZ2ZNAQk2BGDRoIc4FB2NfErSwP1K1dx0Y9a7op/U6OB6ivSFCqaRD0MJWsGXZPlGWJf6EBd9j58IPdTuArnET5cSZiGtQIpJwUqVZQKECLVi+ozgXyHmz2HXpPF3G8jWXjR8KHfSGbkfgqh/IGPW5pbHsjzXs4CUuIGVgIB9sAu1gQHzxpclsdcI/c/Jri6Ps95k9JcgQpmiJGItJkyGRXX2QDle4VZlWkDDoJufFODATl7EyPnf5NY7tohSuFLg0sChweV0ZTQX+6yTi0oCfZcnch4EZdBCWhA/kl5ERR3c+JlAVtjJszCYTJjWu85+0+ua0wBuXH8Yavk5WCoWmrUtCFfS3WJ/cFY41w7gl/TXbA+b0I/p3BzXp8ur8gjSMnetCYhmgrSTMoJ9Dd0uKrM4fRAmxaXh0TmTEJVcUhPRRBVhGrFLHcBdh1gn6/Tdu8CNhgOfSLdVzin0HVZEQxnMPKpdQKlemsSC5oGI02MDPWLOF76Ff7mEKmyasiEBIeS4O+7LysCYkBqA426lP5R6+9h7bnS4wFU/TIIWppsFS6YNtdvsVlr9JPGGEiCYoDBX+2OpQpUhuSR39IsOIRTBoeFtqGCKDWtrmeoNduptF0IL+iAxSqY3cBHoXlx0hFWFSgCm0AbW1EC1f3gfFLYjtF3DeMoHwUQJRPuwH9g/HurTgmH8AhSy5PaS8bKqh3F7Xa08HfGfuHwUYtNVGwO4EDdySI9QWMgjmvgvEHgM7YKzfNl/gi+SNiMT3trGh3Sfmd478nXXtoa4+FHIZzWADngrE7IqMFWUewgNfUTmT+CLANDGej7ktECbwXPJKfmR/Kh5mimzsHLHi9VkurcoEog9h8aT6thInyUqj6IGHzVIsmfihk1Gj8bVa9kTNl6rY3OmPuoDreKIoEwGmLt5BuQ5RK8GiAIqKDm135l4ac8G/kyqjjJnxgzpTI8anrEj1n9qcoguCTs9TS1Uun1E6lUp64jWNKt2rcorGtbcjKbP1vj28bdC4gQQyuvPcgqbg4WhMmEAWnOpaqkWk8VBBgu1cCh6gmtgBlWAKo4bVRmPsFQEeVKErVuDMERdyw90neQPaZUkEERWv1YlsKYD79mWgWpJNC8br15IL8YVOdVPQaFjLTP1aGBLKDR/Dic56gcBgkkrLnYAtVMq69VAsIUnP31IP3KABOlHnqQ8Cb5DukTvjriYpwdUHhUA0rlv7RqwxjEXz7CDNSV+8U0aQmcWHXZrvqnpKJcq4OQ5otrImBB+YE8CXKIVeuVGUt1KUJG08zvIG3bcj9rvgG0mOrW0ClU9dltUBX4FZLyd+NZ14GS9PBar8xcu5WK2gDQBP1i5j7lCVfujFEjQ/DTdOZKBcWWUQERg5DEzvLYShUoX3o7/3PEFJeCn4NZd45g/fC2aU1kexjiLrNAmgNqKZFpRBK/yT9QCg21iq1dG0d62sqPGrOg3MPAZg0fZksdFivrV+RY7RdVoxHaNlYrNNYhBg2O/oTfslSuUuM+2y+MAA0VPuYwOQgEPAbVG84EXN0/6ASoS8Lhkvy0qSUjoyA35p5PeIu1cpULb2u7o/oYiiwFG1BB3MBjIOTlTI2eaxWCulfFPdCM3qncWinXKEUkMVH8okTQFadlnF3/etL+8qjutuKlee/zTzCfypRpw3LDrVOsWkCFB5qxM6VGky8ZuYhnafxSYPjK35PV5qp6r9Sex80eLbL2bwOGBObVwb08jaJr7PJNzwOiEWvBlZEbNNDSJBQpFSXKqCSnDhIrD0tBivBx4LQrfQOELkgIgNppdqzNiLdaQjOBqTScHWIgOSa+AErLVZ9QqNTTSjkI4/CDRSLmzbXBaLihOELV1RjH5igCHjT8kifEa49K6ZvVYiAgHvcmwRYZ8BLqAyedkv1F4YCmB3IYFW427z0KCGdLhtfIElgbdaj6oEmJyKiI3dq0V+EpSy0BB7dupUkoxEiZW1QnCxuRUiwQ699GNxX57P5sNKwoMCfDX2jkoIlZHyosQip7aSxEfAM8kCIPsppy1nV5vtUR8PWB0Q0A3o8F1xfr6WtUQcNuheaSsuatN+rvqfBAnrMGfOoo8bP3bDeo/qQ092WCSB29Lb2oK1avzB09iblYQV+pKYHFEi1oISI8AGFBDT6TspE7ty2HvJf0LoCTL1MGJcYBTB+XXtQDeluMR6ObCwovxOtRiFAVdBy45vOGB6Ahq9ISjZvMQ9VV2tfZAXgca5NQVm8Agr4pOYNwkg0Y0NVJBYDS6en/gG0MjGlzle2WGn0AQNdV/UBmQnJhBrGgzKCp6a/6Go7SeQDaSBm7/ZA/wgR/ZKM5UKLueE+k8ASax9vrnYgWE9VmEMABKhR+k+Rxz7pR1sA4X6rP2dX/twHJ6+JfGnq5TjGEiR+DCb3e65WXa5IeiwovrXOijmcpOe1GMYN0EYuyBrRcmHcND9TavHSRV/4/iG9kDPglm/v39yuY1Gh1cFn/3cyQBaIzun5pahswV8Lagmwh8zQvAmJmeTyu3xDU43TI4QTa/SfSrOfzCzwI3YpTaSBo/q3jrrNK9dHwUfWSW2cApe4/MWS1n6uwl6cnKG/zIuqXiP2uqLKAHXnVimhgVX5lgUvrzjCV6XQzrC0lqBL9pInnVZN7xi3VTNE0GL5ZPd793JXyneQj1yjr/qqS6VP0a6KtS9cvcwszq+D6K8oD5vCX/TsI5GzQ5jX0RKRdzXV63CT5mxVxU2+QQR6/XhYZQwFBjxoIUEvK8QXxv2aIf+MPA4AG7tENr7KqzzzBV1PG6k0iuPS+kPREInv9b5RfaPxhJRam14349305E5JFr2C5UcsH8A57m6mV7yFMHE0etp08rcZFfk9NfjhystZ8hAxzTyVbBUzhui02cuqER+l/fcDvmYcgWqYvwQJdIfQhHrYE1MWu8PadRYdq99Lwq1TVV+2Q+dCwYowugNw80+/n0vOUOymE76+ncRJc56SpbagWdmy6cxmCyqzHMIL77bSp6VTGfd5y9wmMIgi10vaOlgSRAXrNGUcuL4ZnLuLoTSAEM+oCscKKSWdQFZ6zbDkrP5LQ8IGuKhwqGi1ymdLHCA+o0m8OXTW55IzBDxCeV6flwR3ZfvfXiXsvoaYJHWKNXK5mBOn6BYSApJr5PeRyNasXvtogfIEhhlBnEckV/rGTQBuIoCCsb7Rxa7l5o58icgeBSKWDc75fNc174scGPqNpTeJ+xqPt/bmNHF0Tb2+58rcSHdBUpDUdTb90xYK/5RnUpN1qFzkL3bD3YaJAyh4W/EkpMBqpMHqC2o+njjoZJbNRGr+KNHBSHY2Ggf0KWg0RBBH9sryIGdHRiYQ8btwg/Mto++Y0NO2sf5luOo+wkQH3+68FSVpKuwwkc9zH/wUH/hVQHE1Td86A4+Hvn4KGwkskqvnwxeaZ5wjO0sOftgU68pPT/ZVG0TG6PXYHcjvnn6P/AQdS1F4dYjmzAAAAAElFTkSuQmCC'
    },
    {
      id: '2', 
      title: 'Programadores apaixonados por café',
      image: 'https://cdn.awsli.com.br/600x450/608/608801/produto/25729985/44b9f82bb6.jpg'
    },
    {
      id: '3', 
      title: 'Mulheres na tecnologia',
      image: 'https://startupi.com.br/wp-content/uploads/2015/09/Destaque_mulheres-e-tecnologia-462x250.jpg'
    },
  ]

  
  const [comunidades, setComunidades] = React.useState(listaComunidades);

  const pessoasFavoritas = [
    'malarahfelipe',
    'biancames',
    'peas',
    'jeniblodev',
    'PabloMarins',
    'rafaballerini',
  ]
  const [seguidores, setSeguidores] = React.useState([]);
  // 0 - Pegar o array de dados do github 
  // use effect sempre executa uma função. Interceptador de qualquer evento que ocorre
  
  React.useEffect(function() {
    fetch('https://api.github.com/users/beatrizmouradev/followers')
    .then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta) {
      setSeguidores(respostaCompleta);
    })
  }, [])

  // 1 - Criar um box que vai ter um map, baseado nos items do array
  // que pegamos do GitHub
  
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vinda, Bia! :)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) { //onSubmit faz mais eventos que o onsubmit comum do HTML e JS
                e.preventDefault(); //porpadrão, o botão da um refresh e para evitar isso é colocado uma pariável (e) e o e.prevenDefault() que previne o comportamento padrão.
                
                const dadosDoForm = new FormData(e.target); 
                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));
                //state: sem react, quando fazemos uma ação, exemplo: quando clicar no botão aparece uma nova li/faz um alert/ colore tal box etc e tal, ou seja pega e coloca em algum lugar esse resultado. No react cria-se uma variável, ex: comunidades e queando ela for alterada ela atualiza automaticamente com o resultado, ex: comunidade = comunidade antiga + comunidade nova, isso se cgama mudanças de estado.
                
                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                }
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)
            }}>

              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBox title="Seguidores" items={seguidores} />
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
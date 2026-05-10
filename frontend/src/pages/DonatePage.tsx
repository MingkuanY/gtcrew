import { useState, Fragment } from 'react'
import heroDonate from '@/assets/hero-donate.jpg'
import HeroSection from '@/components/HeroSection'
import styles from './DonatePage.module.scss'


const PRESET_AMOUNTS = ['$25', '$50', '$100', '$250', '$500', '$1,000', '$2,500']
const OTHER_KEY = 'other'
const STEP_LABELS = ['Giving Details', 'Gift Review', 'Your Information', 'Payment']

interface PersonInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface PaymentInfo {
  cardName: string
  cardNumber: string
  cardExpiry: string
  cardCvv: string
  billingZip: string
}

function fmtCard(v: string) {
  return v.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ')
}

function fmtExpiry(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 4)
  return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d
}

export default function DonatePage() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const [selected, setSelected] = useState('$25')
  const [customAmount, setCustomAmount] = useState('')

  const [info, setInfo] = useState<PersonInfo>({ firstName: '', lastName: '', email: '', phone: '' })

  const [pay, setPay] = useState<PaymentInfo>({ cardName: '', cardNumber: '', cardExpiry: '', cardCvv: '', billingZip: '' })

  const displayAmount =
    selected === OTHER_KEY
      ? customAmount ? `$${Number(customAmount).toLocaleString()}` : '—'
      : selected

  const isValidAmount = selected !== OTHER_KEY || (!!customAmount && Number(customAmount) > 0)

  const next = () => setStep(s => s + 1)
  const back = () => setStep(s => s - 1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up to payment processor (Stripe, PayPal, etc.)
    setSubmitted(true)
  }

  const StepIndicator = (
    <div className={styles.stepTrack}>
      {STEP_LABELS.map((label, i) => (
        <Fragment key={label}>
          {i > 0 && (
            <div className={`${styles.connector} ${i <= step ? styles.connectorDone : ''}`} />
          )}
          <div className={styles.stepItem}>
            <div
              className={[
                styles.stepCircle,
                i < step ? styles.stepDone : '',
                i === step ? styles.stepActive : '',
              ].join(' ')}
            >
              {i < step ? '✓' : i + 1}
            </div>
            <span className={`${styles.stepLabel} ${i === step ? styles.stepLabelActive : ''}`}>
              {label}
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  )

  return (
    <div>
      <HeroSection
        image={heroDonate}
        imageAlt="GT Crew racing shells on the dock"
        imagePosition="center 40%"
        overlayOpacity={0.4}
        contentTop="calc(50vh - 2.5rem)"
      >
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGold}>Support</span>
          <span className={styles.heroTitleWhite}> Us</span>
        </h1>
      </HeroSection>

      <div className={styles.content}>
        {submitted ? (

          <div className={styles.donateCard}>
            <h2 className={styles.cardHeading}>Thank You!</h2>
            <p className={styles.cardBody}>
              Your donation of <strong>{displayAmount}</strong> to Georgia Tech Rowing has been
              received. We'll send a confirmation to <strong>{info.email}</strong>.
            </p>
            <p className={styles.cardBody}>
              Your support strengthens an unparalleled GT tradition that began in 1985 and helps
              secure a strong future for rowing at Georgia Tech. Go Jackets!
            </p>
          </div>

        ) : (
          <>
            {StepIndicator}

            {step === 0 && (
              <div className={styles.donateCard}>
                <h2 className={styles.cardHeading}>Power Us Through the Race</h2>
                <p className={styles.cardBody}>
                  You are cordially invited to become a member of the Friends of GT Crew to help
                  support and meet the financial challenges of operating Georgia Tech's largest
                  sport club.
                </p>
                <p className={styles.cardBody}>
                  Your contributions strengthen the financial underpinnings of an unparalleled GT
                  tradition that began in 1985 and helps ensure a stable and strong future for
                  rowing at Georgia Tech.
                </p>

                <div className={styles.amountGrid}>
                  {PRESET_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`${styles.amountBtn} ${selected === amt ? styles.amountSelected : ''}`}
                      onClick={() => setSelected(amt)}
                    >
                      {amt}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={[
                      styles.amountBtn,
                      styles.amountOther,
                      selected === OTHER_KEY ? styles.amountSelected : '',
                    ].join(' ')}
                    onClick={() => setSelected(OTHER_KEY)}
                  >
                    <span className={styles.otherDollar}>$</span>
                    <span className={styles.otherLabel}>Other</span>
                  </button>
                </div>

                {selected === OTHER_KEY && (
                  <div className={styles.customRow}>
                    <span className={styles.customPrefix}>$</span>
                    <input
                      type="number"
                      min="1"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className={styles.customInput}
                    />
                  </div>
                )}

                <button
                  type="button"
                  className={styles.nextBtn}
                  onClick={next}
                  disabled={!isValidAmount}
                >
                  Next: Review
                </button>
              </div>
            )}

            {step === 1 && (
              <div className={styles.donateCard}>
                <h2 className={styles.cardHeading}>Your Gift</h2>

                <div className={styles.reviewTable}>
                  <div className={styles.reviewRow}>
                    <span className={styles.reviewLabel}>GT Crew Donation</span>
                    <span className={styles.reviewAmount}>{displayAmount}</span>
                  </div>
                  <div className={styles.reviewDivider} />
                  <div className={styles.reviewRow}>
                    <span className={styles.reviewTotalLabel}>Total</span>
                    <span className={styles.reviewTotalAmount}>{displayAmount}</span>
                  </div>
                </div>

                <div className={styles.navRow}>
                  <button type="button" className={styles.backBtn} onClick={back}>
                    ← Back
                  </button>
                  <button type="button" className={styles.nextBtn} onClick={next}>
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className={styles.donateCard}>
                <h2 className={styles.cardHeading}>Your Information</h2>
                <form
                  className={styles.form}
                  onSubmit={(e) => { e.preventDefault(); next() }}
                  noValidate
                >
                  <div className={styles.inputRow}>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="First Name"
                      required
                      autoComplete="given-name"
                      value={info.firstName}
                      onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
                    />
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Last Name"
                      required
                      autoComplete="family-name"
                      value={info.lastName}
                      onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
                    />
                  </div>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="Email Address"
                    required
                    autoComplete="email"
                    value={info.email}
                    onChange={(e) => setInfo({ ...info, email: e.target.value })}
                  />
                  <input
                    className={styles.input}
                    type="tel"
                    placeholder="Phone Number (optional)"
                    autoComplete="tel"
                    value={info.phone}
                    onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                  />

                  <div className={styles.navRow}>
                    <button type="button" className={styles.backBtn} onClick={back}>
                      ← Back
                    </button>
                    <button type="submit" className={styles.nextBtn}>
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className={styles.donateCard}>
                <h2 className={styles.cardHeading}>Payment</h2>

                <div className={styles.donationSummary}>
                  Donating <strong>{displayAmount}</strong> to Georgia Tech Rowing
                </div>

                {/* TODO: Replace form submission with a real payment processor (Stripe, PayPal, etc.) */}
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Cardholder Name"
                    required
                    autoComplete="cc-name"
                    value={pay.cardName}
                    onChange={(e) => setPay({ ...pay, cardName: e.target.value })}
                  />
                  <input
                    className={styles.input}
                    type="text"
                    inputMode="numeric"
                    placeholder="Card Number"
                    required
                    autoComplete="cc-number"
                    value={pay.cardNumber}
                    onChange={(e) => setPay({ ...pay, cardNumber: fmtCard(e.target.value) })}
                  />
                  <div className={styles.inputRow}>
                    <input
                      className={styles.input}
                      type="text"
                      inputMode="numeric"
                      placeholder="MM / YY"
                      required
                      autoComplete="cc-exp"
                      value={pay.cardExpiry}
                      onChange={(e) => setPay({ ...pay, cardExpiry: fmtExpiry(e.target.value) })}
                    />
                    <input
                      className={styles.input}
                      type="text"
                      inputMode="numeric"
                      placeholder="CVV"
                      required
                      autoComplete="cc-csc"
                      maxLength={4}
                      value={pay.cardCvv}
                      onChange={(e) =>
                        setPay({ ...pay, cardCvv: e.target.value.replace(/\D/g, '').slice(0, 4) })
                      }
                    />
                  </div>
                  <input
                    className={styles.input}
                    type="text"
                    inputMode="numeric"
                    placeholder="Billing Zip Code"
                    required
                    autoComplete="postal-code"
                    maxLength={5}
                    value={pay.billingZip}
                    onChange={(e) =>
                      setPay({ ...pay, billingZip: e.target.value.replace(/\D/g, '').slice(0, 5) })
                    }
                  />

                  <div className={styles.navRow}>
                    <button type="button" className={styles.backBtn} onClick={back}>
                      ← Back
                    </button>
                    <button type="submit" className={styles.nextBtn}>
                      Submit Donation
                    </button>
                  </div>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

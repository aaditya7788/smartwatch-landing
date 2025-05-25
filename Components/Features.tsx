import { HeartIcon, EyeIcon, DropletIcon } from 'lucide-react'; // example icons

export default function Features() {
  return (
    <section className="flex flex-row gap-6 mt-20 place-content-between">
      <div className="flex items-start gap-4">
        <HeartIcon className="w-6 h-6 text-white" />
        <div>
          <h3 className="text-white text-lg font-semibold mb-1">Advanced Health Tracking</h3>
          <p className="text-white text-sm">
            Monitor your <strong>heart rate</strong>, blood oxygen, and more.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <EyeIcon className="w-6 h-6 text-white" />
        <div>
          <h3 className="text-white text-lg font-semibold mb-1">Always-On Retina Display</h3>
          <p className="text-white text-sm">
            Crisp-and <strong>clear</strong> display that’s always visible.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <DropletIcon className="w-6 h-6 text-white" />
        <div>
          <h3 className="text-white text-lg font-semibold mb-1">Water Resistant</h3>
          <p className="text-white text-sm">
            Swim-proof design for worry-free use.
          </p>
        </div>
      </div>
    </section>
  );
}
